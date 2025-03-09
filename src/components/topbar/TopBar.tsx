import { theme } from "../../theme"
import LanguageSelector from "./LanguageSelector"
import SignIn from "./SignIn"
import SearchBar from "./SearchBar"
import { CSSProperties } from "react";

const TopBar = () => {
    const topbarStyle : CSSProperties = {
        backgroundColor: theme.colors.green3,
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

    return (
        <div style={topbarStyle} >
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