const SearchBar = (props) => {
    

    return ( 
        <div>
            <form>
                <input value = {props.search} type= 'text' placeholder="Search..." onChange={(event) => props.setSearch(event.target.value)}/>
            </form>
        </div>
     );
}
 
export default SearchBar;