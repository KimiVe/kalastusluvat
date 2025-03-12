import LanguageSelector from "./LanguageSelector"
import SignIn from "./SignIn"
import MyInformation from "./MyInformation"
import SearchBar from "./SearchBar"
import '../styles/TopBar.css'

const TopBar = () => {
    return (
        <div className="topbar">
            <div>
                Kala-Appi
            </div>
            <SearchBar />
            <LanguageSelector />
            <MyInformation />  
        </div>
    )
}
export default TopBar