import { useSelector } from "react-redux"
import { AppState } from "../../store"
import '../styles/TopBar.css'

const SignIn = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)


    return(
        <div>
            <div className="signin">
                {textContent.loginButton.login}
            </div>
        </div>
    )
}
export default SignIn