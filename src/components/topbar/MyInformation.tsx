
import 'react-dropdown/style.css'
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';


const MyInformation = () => {
    const content = useSelector((state:AppState) => state.selectedLanguage.content)

    const navigate = useNavigate();

    const defaultvalue = {value: content.myInformationButton.myInformation, label: content.myInformationButton.myInformation}
    const options = [
        { value: 'licenses', label: content.myInformationButton.myLicenses },
        { value: 'myinformation', label: content.myInformationButton.myInformation },
        { value: 'shoppingcart', label: content.myInformationButton.shoppingCart },
      ];    
    
    const handleChange = (v?: string) => {
        navigate(`/${v}`)
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
         
            />
        </div>
    )

}

export default MyInformation;