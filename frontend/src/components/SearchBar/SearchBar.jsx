import "./SearchBar.css"

const SearchBar = (props) => {
    
    return ( 
        <div>
            <form>
                <input className="searchbar"  type= 'text' placeholder="Search Resources..." onChange={(e)=>props.setUserInput(e.target.value)} />
            </form>
        </div>
     );
}
 
export default SearchBar;