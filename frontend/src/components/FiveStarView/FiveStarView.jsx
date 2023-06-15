import { useState, useEffect} from 'react';
import axios from "axios";
import Rating from '@mui/material/Rating';

const FiveStarView = (props) => {
    const [values, setValues] = useState();
    const [resourceAvg, setResourceAvg] = useState();

    async function getRating() {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/ratings/${props.resource.id}/`
      );
      console.log(response.data);
      setValues(response.data);
    }
  
    useEffect(() => {
      getRating();
    }, [values]);

    async function getAverage() {
      let resource_ratings = values.map(el => {
        return el.rating});
        debugger
        console.log(resource_ratings)
  
        var sum = 0;
        
        if (resource_ratings === undefined) {
            return 0
        }
        else {
          for (var number of resource_ratings) {
            sum += number};
        }

        let average = sum/resource_ratings.length;
        console.log(average)
        setResourceAvg(average);

        
        
    }

    useEffect(() => {
      getAverage();
    }, [resourceAvg]);


  
    return ( 
        <Rating
        name="read-only"
        value={resourceAvg}
      />
    )
}
 
export default FiveStarView;