import "./SearchBar.css"

const SearchBar = (props) => {
    
    return ( 
        <div>
            <form>
                <input className="searchbar"  value = {props.filteredResources} type= 'text' placeholder="Search Resources..." onChange={props.handleChange} />
            </form>
        </div>
     );
}
 
export default SearchBar;