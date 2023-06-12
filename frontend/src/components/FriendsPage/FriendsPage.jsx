import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import './FriendsPage.css'


const FriendsPage = (props) => {
    const [user, token] = useAuth();
    const [resources, setResources] = useState([]);
    const [usersFriends, setUsersFriends] = useState([]);

    async function allResources() {
      const response = await axios.get('http://127.0.0.1:8000/api/resources/all/');
      // console.log(response.data);
      setResources(response.data);
  }

    useEffect(() => {
      allResources();
    }, []);
  

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


    let friend_id = usersFriends.flatMap((usersFriend) => {
      return (
        usersFriend.friend.map(((el) => el.id))
      )
    })
    console.log(friend_id)

    let posts = resources.filter (el => {
        return friend_id.includes(el.user.id)
      })
      console.log(posts)
    
    return ( 
    <div>
        {posts.map((post) => {
            return (
                  <div key={post.id} className="flex-friend">
                    <div>
                      {post.user.username}
                    </div>
                    <div>
                      {post.title}
                    </div>
                    <div className="subject-grade">
                      <div>
                        {post.subject}
                      </div>
                      <div>
                        {post.grade_level.map((element) => element.level + " ")}
                      </div>
                    </div>
                   
                    
                  </div>
            )
        })}
    </div>
     );
}
 
export default FriendsPage;