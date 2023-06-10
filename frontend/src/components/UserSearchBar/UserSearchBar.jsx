const UserSearchBar = (props) => {
    

    return ( 
        <div>
            <form>
                <input className="searchbar"  type= 'text' placeholder="Search Users..." onChange={(e)=>props.setUserInput(e.target.value)}/>
            </form>
        </div>
     );
}
 
export default UserSearchBar;