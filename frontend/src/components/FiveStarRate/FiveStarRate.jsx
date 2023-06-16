import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const rating_options = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
]

const FiveStarRate = (props) => {

    const [user, token] = useAuth();
    const [rate, setRate] = useState("");

    async function newRating(newRate) {


        try {
            let response = await axios.post('http://127.0.0.1:8000/api/resources/post/', newRate, 
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
            if(response.status === 201){
                console.log("Rating successful")
                
            }
        } catch (error) {
            console.log(error.response.data);
          }
          

    }

    function handleSubmit(event) {
        event.preventDefault();
        let newRate = {
          resource_id: props.resourceID,
          rating: rate,
    
        };
        console.log(newRate);
        newRating(newRate);
      }



    return ( 
        <div>
            <form action="/action_page.php">
                {/* <label for="ratings">Rate:</label> */}
                    <select id="ratings" name="ratings" onChange={(event) => setRate(event.target.value)}>
                        <option ></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                <button class='btn btn-primary' type="submit" onClick={handleSubmit}>Rate</button>
            </form>

        </div>
     );
}
 
export default FiveStarRate;