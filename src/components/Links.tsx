import './styles/Links.css'
import { Link } from "react-router-dom"
import { AppState } from '../store'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Links = () => {
    const content = useSelector((state:AppState) => state.selectedLanguage.content)
    const location = useLocation();

    return (
        <div className='linkbar'>
            <div className='sidefiller' />
            <div className='link-wrapper'>
                <div className={location.pathname === '/' ? 'link-background-active' : 'link-background'}>
                <Link className='link' to={'/'}>
                    {content.MenuBar.frontPage}
                </Link>
                </div>
               <div className={location.pathname === '/search' ? 'link-background-active' : 'link-background'}>
               <Link className='link' to={'/search'} >
                    {content.MenuBar.advancedSearch}
                </Link>
               </div>
                <div className={location.pathname === '/questions' ? 'link-background-active' : 'link-background'}>
                <Link className='link' to={'/questions'} >
                    {content.MenuBar.commonQuestions}
                </Link>
                </div>
                <div className={location.pathname === '/aboutus' ? 'link-background-active' : 'link-background'}>
                <Link className='link' to={'/aboutus'} >
                    {content.MenuBar.aboutUs}
                </Link>
                </div>
            </div>
            <div className='sidefiller' />
        </div>
    )
}
export default Links