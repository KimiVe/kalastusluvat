import { useSelector } from "react-redux"
import { AppState } from "../../store"

const SignIn = () => {
    const textContent = useSelector((state:AppState) => state.selectedLanguage.content)


    return(
        <div>
            <div style={{backgroundColor: 'white', padding: '10px', cursor: 'pointer'}} >
                {textContent.loginButton.titile0}
            </div>
        </div>
    )
}
export default SignIn