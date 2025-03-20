import LanguageSelector from "./LanguageSelector"
import MyInformation from "./MyInformation"
import SearchBar from "./SearchBar"
import Users from "./Users"
import '../styles/TopBar.css'
import SignIn from "./SignIn"

const TopBar = () => {
    return (
        <div className="topbar">
            <div>
                Kala-Appi
            </div>
            <SearchBar />
            <LanguageSelector />
            <MyInformation /> 
            <Users /> 
            <SignIn /> 
            

            

        </div>
    )
}
export default TopBar