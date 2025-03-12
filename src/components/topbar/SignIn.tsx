import { useSelector } from "react-redux"
import { AppState } from "../../store"
import '../styles/TopBar.css'

const SignIn = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)


    return (
        <div className="login-box">
            <button onClick={onClose}>Close</button>
            <p>{data.email}</p>
            <p>{data.passwordDescription}</p>
            <button>{data.loginButton}</button>
        </div>
    );
}
export default SignIn

