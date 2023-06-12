import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const AddFriend = (props) => {

    const[addFriend, setAddFriend] = useState()
    const[user, token] = useAuth();

    
    async function AddFriend() {
        
            const response = await axios.patch(`http://127.0.0.1:8000/api/friendslist/add/user/${user.id}/friend/${props.user.id}/`, {}, 
            {
                headers: {
                    Authorization: 'Bearer ' + token 
                }
            });
            console.log(response.data);
            setAddFriend(response.data);
            
    }
    
    
    return ( 
        <div>
            <button type='submit' className='btn btn-primary' style={{'marginTop': '1em'}} onClick={AddFriend}>Add Friend</button>
        </div>
     );
}
 
export default AddFriend;