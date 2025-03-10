import { useSelector } from "react-redux"
import { AppState } from "../../store"
import '../styles/TopBar.css'

const SearchBar = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)
    return(
        <div className="searchbar">
            <input className="searchbar-input" type="text"/>
            <div className="searchbar-button">{textContent.MenuBar.search}</div>
        </div>
    )
}
export default SearchBar