import LanguageSelector from "./LanguageSelector"
import MyInformation from "./MyInformation"
import SearchBar from "./SearchBar"
import '../styles/TopBar.css'
import SignIn from "./SignIn"
import { useSelector } from "react-redux"
import { AppState } from "../../store"

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
        </div>
    )
}
export default TopBar