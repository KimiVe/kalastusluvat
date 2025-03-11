///import data from textContentFI.json
//import data from textContentENG.json
//import data fromLanguageSelector.tsx


const MenuBar = ({ data }) => {
    return (
        <div>
            <div>{data.language}</div>
            <div>{data.search}</div>
            <div>{data.searchBar}</div>
            <div>{data.frontPage}</div>
            <div>{data.advancedSearch}</div>
            <div>{data.commonQuestions}</div>
            <div>{data.aboutUs}</div>
            <button onClick={onLoginClick}>{data.loginButton.titile0}</button>
        </div>
    );
};
const LoginBox = ({ data, onClose }) => {
    return (
        <div className="login-box">
            <button onClick={onClose}>Close</button>
            <p>{data.email}</p>
            <p>{data.passwordDescription}</p>
            <button>{data.loginButton}</button>
        </div>
    );
};
const Homepage = () => {
    
   
    return (
        <div>
            <button onClick={() => setLanguage('en')}>English</button>
            <button onClick={() => setLanguage('fi')}>Suomi</button>
            <MenuBar data={data.MenuBar} />
            <h1>{data.frontPage.text0Header}</h1>
            <p>{data.frontPage.text0Content}</p>
            <button>{data.frontPage.text1Button}</button>
            <div>
                <p>{data.MenuBar.frontPage}</p>
                <p>{data.MenuBar.aboutUs}</p>
            </div>
            <div>
                <button>{data.loginButton.titile0}</button>
            </div>
            <div>
                <p>{data.loginBox.email}</p>
                <p>{data.loginBox.passwordDescription}</p>
                <button>{data.loginBox.logginButton}</button>
            </div>
            <div>
                <p>{data.registerBox.email}</p>
                <button>{data.registerBox.CreateAccountButton}</button>
            </div>
        </div>
    );
}
export default Homepage