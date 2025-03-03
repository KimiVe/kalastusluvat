import { theme } from "../theme"
import { Link } from "react-router-dom"

const Links = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: theme.colors.white,
   
    }
    const linkBackground = {
        backgroundColor: theme.colors.green4,
        padding: '5px',
        display: 'flex',
        alignContent: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    }

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{backgroundColor: theme.colors.green1, flexGrow: 1}}>
            </div>
            <div style={{flexGrow: 3, display:'flex', justifyContent:'space-evenly'}}>
                <div style={linkBackground}>
                <Link to={'/'} style={linkStyle}>
                    Etusivu
                </Link>
                </div>
               <div style={linkBackground}>
               <Link to={'/search'} style={linkStyle}>
                    Tarkennettu haku
                </Link>
               </div>
                <div style={linkBackground}>
                <Link to={'/questions'} style={linkStyle}>
                    Yleiset kysymykset
                </Link>
                </div>
                <div style={linkBackground}>
                <Link to={'/aboutus'} style={linkStyle}>
                    Tietoa meistä
                </Link>
                </div>
                
            </div>
            <div style={{backgroundColor: theme.colors.green1, flexGrow: 1}}>
            </div>
        </div>
    )
}
export default Links