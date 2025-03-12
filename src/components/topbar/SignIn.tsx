import { useSelector } from "react-redux"
import { AppState } from "../../store"
import '../styles/TopBar.css'

const SignIn = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)

    return (
        <div className="login-box">
            <button onClick={onClose}>Close</button>
            <p>{data.email}</p>
            <input type="email" placeholder={data.email} />
            <p>{data.password}</p>
            <input type="password" placeholder={data.password} />
            <p>{data.passwordDescription}</p>
            <button>{data.loginButton}</button>
            <button>{data.createAccountButton}</button>
            <p>{data.createAccountButtonDescription}</p>
        </div>
}
export default SignIn

