import LanguageSelector from "./LanguageSelector"
import MyInformation from "./MyInformation"
import SearchBar from "./SearchBar"
import '../styles/TopBar.css'
import SignIn from "./SignIn"
import { useSelector, UseSelector } from "react-redux"
import { AppState } from "../../store"
import Users from "./Users"

const TopBar = () => {
    const isSignedIn = useSelector((state: AppState) => state.signIn.signedIn)
    return (
        <div className="topbar">
            <div>
                Kala-Appi
            </div>
            <SearchBar />
            <LanguageSelector />
            {isSignedIn ? <MyInformation /> : <SignIn />}
            <Users />
        </div>
    )
}
export default TopBar