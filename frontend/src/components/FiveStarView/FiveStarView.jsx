import React, { useState, useEffect} from 'react';
// import axios from "axios";
import Rating from '@mui/material/Rating';

const FiveStarView = (props) => {
    // const [values, setValues] = useState();
    const [resourceAvg, setResourceAvg] = React.useState(2);

    // async function getRating() {
    //   const response = await axios.get(
    //     `http://127.0.0.1:8000/api/ratings/${props.resource.id}/`
    //   );
    //   console.log(response.data);
    //   setValues(response.data);
    // }
  
    // useEffect(() => {
    //   getRating();
    // }, []);

    // async function getAverage(average) {
    //   let resource_ratings = values.map(el => {
    //     return el.rating});
    //     console.log(resource_ratings)
  
    //     var sum = 0;
        
    //     if (resource_ratings === undefined) {
    //         return average = 0
    //     }
    //     else {
    //       for (var number of resource_ratings) {
    //         sum += number};
    //     }

    //     average = sum/resource_ratings.length;
    //     console.log(average)
    //     setResourceAvg(average);

        
        
    // }

    // useEffect(() => {
    //   getAverage();
    // }, []);


  
    return ( 
        <Rating
        name="read-only"
        value={resourceAvg}
      />
    )
}
 
export default FiveStarView;