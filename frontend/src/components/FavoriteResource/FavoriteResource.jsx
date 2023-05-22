import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const FavoriteResource = (props) => {

    const[favoritedResource, setFavoritedResource] = useState()
    const[user, token] = useAuth();

    
    async function Favorited() {
        
            const response = await axios.patch(`http://127.0.0.1:8000/api/favorites/user/${user.id}/favorite/${props.resourceDetails.id}/`, {},
            {
                headers: {
                    Authorization: 'Bearer ' + token 
                }
            });
            console.log(response.data);
            setFavoritedResource(response.data);
            
    }
    
    
    return ( 
        <div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}} onClick={Favorited}>Favorite</button>
        </div>
     );
}
 
export default FavoriteResource;