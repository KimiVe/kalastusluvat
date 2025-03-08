import { theme } from "../../theme"
import { useSelector } from "react-redux"
import { AppState } from "../../store"


const SearchBar = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)
    return(
        <div style={{display:'flex', flexDirection:'row', height: '30px'
        }}>
            <input type="text" style={{border: 'none'}} placeholder={textContent.MenuBar.searchBar}  />
            <div style={{backgroundColor: theme.colors.green1,width: '45px', alignContent: 'center', textAlign:'center', cursor: 'pointer'}}>{textContent.MenuBar.search}</div>
        </div>
    )
}
export default SearchBar