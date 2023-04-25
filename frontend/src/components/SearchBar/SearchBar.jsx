const SearchBar = (props) => {
    
    return ( 
        <div>
            <form onSubmit={props.handleSubmit} className="form-container">
                <div>
                    <input className="searchbar"  value = {props.search} type= 'text' placeholder="Search..." onChange={(event) => props.setSearch(event.target.value)} />
                </div>
                <div>
                        <button>Search</button>
                    
                </div>
            </form>
        </div>
     );
}
 
export default SearchBar;