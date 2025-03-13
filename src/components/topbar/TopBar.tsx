import LanguageSelector from "./LanguageSelector"
import SignIn from "./SignIn"
import MyInformation from "./MyInformation"
import SearchBar from "./SearchBar"
import Users from "./Users"
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
            <MyInformation />  
            <Users />  
            

        </div>
    )
}
export default TopBar