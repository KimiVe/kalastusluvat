import { useSelector } from "react-redux"
import { AppState } from "../../store"
import '../styles/TopBar.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"


const SearchBar = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/search', {state:{searchInput}})
        setSearchInput('')
    }

    return(
        <div className="searchbar">
            <input className="searchbar-input" type="text" value={searchInput} onChange={(v) => setSearchInput(v.target.value)}/>
            <div className="searchbar-button" onClick={handleSearch}>{textContent.MenuBar.search}</div>
        </div>
    )
}
export default SearchBar