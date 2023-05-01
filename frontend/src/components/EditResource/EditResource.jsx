const EditResource = (props) => {
    async function EditResource() {
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/resources/edit/${resourceId}`,
            {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "multipart/form-data",
                },
              });
            if(response.status === 201){
                
            }
        } catch (error) {
            console.log(error.response.data);
          }

    }
    

    return ( 
        <button type="submit">Edit</button>
     );
}
 
export default EditResource;