import React, { useState } from 'react';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import SignIn from './SignIn';
import '../styles/TopBar.css';
///import data from textContentFI.json
//import data from textContentENG.json

const MenuBar = ({ data, onLoginClick }) => {
    return (
        <nav className="menu-bar">
            <button>{data.frontPage}</button>
            <button>{data.advancedSearch}</button>
            <button>{data.commonQuestions}</button>
            <button>{data.aboutUs}</button>
        </nav>
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
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="homepage">
            <header>
                <div className="logo">Kala-Appi</div>
                <SearchBar />
                <LanguageSelector />
                <button className="login-button" onClick={() => setShowLogin(true)}>{data.loginButton.titile0}</button>
            </header>
            <MenuBar data={data.MenuBar} onLoginClick={() => setShowLogin(true)} />
            <main>
                <section className="intro">
                    <div className="intro-text">
                        <h1>{data.frontPage.text0Header}</h1>
                        <p>{data.frontPage.text0Content}</p>
                    </div>
                    <div className="map-container">
                        {/* kartalle paikka */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094127!2d144.96305791531692!3d-37.81627977975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1611817622553!5m2!1sen!2sau"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>
                <section className="license-info">
                    <h2>Kalastonhoitomaksu</h2>
                    <p>Kalastonhoitomaksu on kalastajan pakollinen perusmaksu, joka tulee maksaa, jos on iältään 
                        18–69-vuotias ja kalastaa vieheellä tai pyydyksillä tai ravustaa. Tämä tarkoittaa sitä, 
                        että kun kalastat esimerkiksi virvelillä, verkoilla tai katiskalla, tarvitset aina 
                        kalastonhoitomaksun. Poikkeuksena ovat kalastajat, jotka ehtivät täyttää vähintään 
                        65 vuotta 31.12.2023 mennessä.</p>
                    <a href="https://www.eraluvat.fi/kalastus/kalastonhoitomaksu" target="_blank" rel="noopener noreferrer" className="payment-button">
                        Maksa kalastonhoitomaksu
                    </a>
                </section>
            </main>
            {showLogin && <LoginBox data={data.loginBox} onClose={() => setShowLogin(false)} />}
        </div>
    );
};

export default Homepage