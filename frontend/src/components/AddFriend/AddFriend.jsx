import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const AddFriend = (props) => {

    const[addFriend, setAddFriend] = useState()
    const[user, token] = useAuth();

<<<<<<< HEAD
    
    async function AddFriend() {
        
            const response = await axios.patch(`http://127.0.0.1:8000/api/friendslist/add/user/${user.id}/friend/${props.user.id}/`, {}, 
            {
                headers: {
                    Authorization: 'Bearer ' + token 
                }
            });
            console.log(response.data);
            setAddFriend(response.data);
            
=======
    async function AddFriend() {
        const response = await axios.patch(`http://127.0.0.1:8000/api/friendslist/add/user/${props.user.id}/friend/${props.users.id}/`, 
        {
            headers: {
                Authorization: 'Bearer' + token 
            }
        });
        console.log(response.data);
        setAddFriend(response.data);
>>>>>>> 44b06a4789b362670b29a5c93ad573dfe630941f
    }
    
    
    return ( 
        <div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}} onClick={AddFriend}>Add Friend</button>
        </div>
     );
}
 
export default AddFriend;