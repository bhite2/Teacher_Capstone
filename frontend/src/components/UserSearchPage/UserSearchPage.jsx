import UserSearchBar from "../UserSearchBar/UserSearchBar";
import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import AddFriend from "../AddFriend/AddFriend";
import './UserSearchPage.css'


const UserSearchPage = (props) => {
    const [user, token] = useAuth();
    const [users, setUsers] = useState([]);
    const [userInput, setUserInput] = useState("");
  
    
  
    useEffect(() => {
      const allUsers = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/friendslist/all/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response.data)
          setUsers(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      allUsers();
    }, [token]);


    return ( 
    <div>
        <div className="searchbar">
            <UserSearchBar setUserInput={setUserInput}/>
        </div>  
            <table className="userinfo">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Grade Level</th>
                        <th>District</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                  {users.filter((el) => el.username.toLowerCase().includes(userInput) || 
                  el.user_grade?.toLowerCase().includes(userInput) || 
                  el.user_district?.toLowerCase().includes(userInput) ||
                  el.user_state?.toLowerCase().includes(userInput))
                  .map((user) => {
                    return (
                      <tr>
                      <td>{user.username}</td>
                      <td>{user.user_grade}</td>
                      <td>{user.user_district}</td>
                      <td>{user.user_state}</td>
                      <td><AddFriend user = {user}/></td>
                  </tr>
                  )
                  })}            
                </tbody>
            </table>
    </div>
     );
}
 
export default UserSearchPage;