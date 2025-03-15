import './styles/Links.css'
import { Link } from "react-router-dom"
import { AppState } from '../store'
import { useSelector } from 'react-redux'
import RegisterHere from './RegisterHere';

const Links = () => {
    const content = useSelector((state:AppState) => state.selectedLanguage.content)

    return (
        <div className='linkbar'>
            <div className='sidefiller' />
            <div className='link-wrapper'>
                <div className='link-background'>
                    <RegisterHere />
                </div>
                <div className='link-background'>
                <Link className='link' to={'/'}>
                    {content.MenuBar.frontPage}
                </Link>
                </div>
               <div className='link-background'>
               <Link className='link' to={'/search'} >
                    {content.MenuBar.advancedSearch}
                </Link>
               </div>
                <div className='link-background'>
                <Link className='link' to={'/questions'} >
                    {content.MenuBar.commonQuestions}
                </Link>
                </div>
                <div className='link-background'>
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