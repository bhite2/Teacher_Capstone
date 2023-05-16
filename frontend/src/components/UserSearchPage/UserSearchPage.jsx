import UserSearchBar from "../UserSearchBar/UserSearchBar";
import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import AddFriend from "../AddFriend/AddFriend";
import './UserSearchPage.css'


const UserSearchPage = (props) => {
    const [user, token] = useAuth();
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('')
  
    useEffect(() => {
      const allUsers = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/friendslist/all/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
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
            <UserSearchBar users={users} search = {filter} setSearch = {setFilter}/>
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
                  {users.map((user) => {
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