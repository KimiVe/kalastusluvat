import { useSelector } from "react-redux"
import { AppState } from "../store"



const Homepage = () => {
    const language = useSelector((state: AppState) => state.selectedLanguage.language)
    console.log(language)
    return(
        <div>
            {language}
        </div>
    )
}
export default Homepage