const DeleteResoure = () => {
   
    async function DeleteResource() {
        try {
            let response = await axios.delete(`http://127.0.0.1:8000/api/resources/edit/${resourceId}`, 
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
        <button type="submit">Delete</button>
     );
}
 
export default DeleteResource;