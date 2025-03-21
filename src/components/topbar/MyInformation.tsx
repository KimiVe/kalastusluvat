
import 'react-dropdown/style.css'
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../reducers/signInReducer';


const MyInformation = () => {
    const content = useSelector((state:AppState) => state.selectedLanguage.content)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const defaultvalue = {value: content.myInformationButton.myInformation, label: content.myInformationButton.myInformation}
    const options = [
        { value: 'licenses', label: content.myInformationButton.myLicenses },
        { value: 'myinformation', label: content.myInformationButton.myInformation },
        { value: 'shoppingcart', label: content.myInformationButton.shoppingCart },
        { value: 'signout', label: content.myInformationButton.signout }
      ];    
    
    const handleChange = (v?: string) => {
          v === 'signout' ? dispatch(signOut()) :navigate(`/${v}`)
    }

    const customStyles = {
        option: (provided: any, state: { isFocused: any; }) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#E0E6FF' : 'white',
          color: 'black',
          
        })
      };
      
    return (
        <div>
           <Select
            value={defaultvalue}
            onChange={(v) => handleChange(v?.value)}
            options={options}
            styles={customStyles}
            isSearchable={false}
            
            />
        </div>
    )

}

export default MyInformation;