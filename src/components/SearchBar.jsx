import searchIcon from '../assets/search-icon.png'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const SearchBar = () => {
    const { setSearchQuery, searchQuery, getSearch } = useContext(AppContext)

    return (
        <form className="search-bar" onSubmit={getSearch}>
            <img src={searchIcon} className="search-icon" />
            <input type="text" 
            placeholder="Search Google"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
    )
}

export default SearchBar;