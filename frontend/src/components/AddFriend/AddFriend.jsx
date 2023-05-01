import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AddFriend = (props) => {

    const[addFriend, setAddFriend] = useState()
    const[user, token] = useAuth();
    
    async function AddFriend() {
        const response = await axios.patch('http://127.0.0.1:8000/api/friendslist/add/user/1/friend/3/', 
        {
            headers: {
                Authorization: 'Bearer' + token 
            }
        });
        console.log(response.data);
        setAddFriend(response.data);
    }
    
    
    return ( 
        <div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Add Friend</button>
        </div>
     );
}
 
export default AddFriend;