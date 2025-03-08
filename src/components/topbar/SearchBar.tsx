import { theme } from "../../theme"

const SearchBar = () => {
    return(
        <div style={{display:'flex', flexDirection:'row', height: '30px'
        }}>
            <input type="text" style={{border: 'none'}} placeholder="Hae kalalupaa"  />
            <div style={{backgroundColor: theme.colors.green1,width: '45px', alignContent: 'center', textAlign:'center'}}>Hae</div>
        </div>
    )
}
export default SearchBar