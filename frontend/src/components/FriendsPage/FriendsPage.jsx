import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";


const FriendsPage = (props) => {
    const [user, token] = useAuth();
    const [usersFriends, setUsersFriends] = useState([]);
   
    useEffect(() => {
      const usersFriends = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/friendslist/friends/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response.data)
          setUsersFriends(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      usersFriends();
    }, [token]);


    return ( 
    <div>
        {usersFriends.map((usersFriend) => {
            return (
                  <div>
                    {usersFriend.friend.map((element) => element.username)}
                  </div>
            )
        })}
    </div>
     );
}
 
export default FriendsPage;