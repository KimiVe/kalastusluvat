import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { MdLanguage } from "react-icons/md";

const LanguageSelector = () => {
    const languages = ['Suomeksi (FI)', 'English (EN)']
    const defaultLanguage = languages[0]


    return(
        <div style={{display: 'flex', flexDirection:'row'}}>
            <MdLanguage size={35} color='white'/> 
            <Dropdown options={languages} value={defaultLanguage} />
        </div>
    )
}

export default LanguageSelector