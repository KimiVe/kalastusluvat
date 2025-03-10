import { useSelector } from "react-redux"
import { AppState } from "../../store"
import '../styles/TopBar.css'

const SignIn = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)


    return(
        <div>
            <div className="signin">
                {textContent.loginButton.titile0}
            </div>
        </div>
    )
}
export default SignIn