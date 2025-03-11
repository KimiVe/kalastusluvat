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
        <div className="homepage">
            <header>
                <div className="logo">Kala-Appi</div>
                <div className="search-bar">
                    <input type="text" placeholder={data.searchBar} />
                    <button>{data.search}</button>
                </div>
                <div className="language-select">
                    <button onClick={() => setLanguage('en')}>English</button>
                    <button onClick={() => setLanguage('fi')}>Suomeksi (FI)</button>
                </div>
                <button className="login-button" onClick={() => setShowLogin(true)}>{data.loginButton.titile0}</button>
            </header>
            <nav>
                <MenuBar data={data.MenuBar} onLoginClick={() => setShowLogin(true)} />
            </nav>
            <main>
                <h1>{data.frontPage.text0Header}</h1>
                <p>{data.frontPage.text0Content}</p>
                <button>{data.frontPage.text1Button}</button>
                <section>
                    <h2>Kalastonhoitomaksu</h2>
                    <p>"Kalastonhoitomaksu on kalastajan pakollinen perusmaksu, joka tulee maksaa, jos on iältään 
                        18–69-vuotias ja kalastaa vieheellä tai pyydyksillä tai ravustaa. Tämä tarkoittaa sitä, 
                        että kun kalastat esimerkiksi virvelillä, verkoilla tai katiskalla, tarvitset aina 
                        kalastonhoitomaksun. Poikkeuksena ovat kalastajat, jotka ehtivät täyttää vähintään 
                        65 vuotta 31.12.2023 mennessä."</p>
                    <a href="https://www.eraluvat.fi/kalastus/kalastonhoitomaksu" target="_blank" rel="noopener noreferrer">Maksa kalastonhoitomaksu</a>
                </section>
            </main>
            {showLogin && <LoginBox data={data.loginBox} onClose={() => setShowLogin(false)} />}
            <div>
                <p>{data.registerBox.email}</p>
                <button>{data.registerBox.CreateAccountButton}</button>
            </div>
        </div>
    );
};

export default Homepage