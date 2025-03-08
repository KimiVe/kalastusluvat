import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { MdLanguage } from "react-icons/md";
import { setLanguage } from '../../reducers/languageReducer';
import { useDispatch } from 'react-redux';


const LanguageSelector = () => {
    const languages = ['Suomeksi (FI)', 'English (EN)']
    const defaultLanguage = languages[0]
    const dispatch = useDispatch();
    const regex = /\(([^)]+)\)/;

    const handleLanguageChange = (value: string) => {
        const language = value.match(regex)?.[1]
        if (typeof language === 'string') {
            dispatch(setLanguage(language))
        }
    }

    return(
        <div style={{display: 'flex', flexDirection:'row'}}>
            <MdLanguage size={35} color='white'/> 
            <Dropdown options={languages} value={defaultLanguage} onChange={(v) => handleLanguageChange(v.value)}/>
        </div>
    )
}


export default LanguageSelector