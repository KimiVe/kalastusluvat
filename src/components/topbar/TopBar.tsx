import LanguageSelector from "./LanguageSelector"
import SignIn from "./SignIn"
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
            <SignIn />  
        </div>
    )
}
export default TopBar