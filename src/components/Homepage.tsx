import { useSelector } from "react-redux"
import { AppState } from "../../store"
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import SignIn from './SignIn';
import TopBar from './TopBar';
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

const Homepage = () => {

    return (
        <div className="homepage">
             <header>
                <TopBar />
            </header>
            {/*<header>
                <div className="logo">Kala-Appi</div>
                <SearchBar />
                <LanguageSelector />
                <button className="login-button" onClick={() => setShowLogin(true)}>{data.loginButton.titile0}</button>
            </header>*/}
            <MenuBar data={data.MenuBar} />
            <main>
                <section className="intro">
                    <div className="intro-text">
                        <h1>{data.frontPage.text0Header}</h1>
                        <p>{data.frontPage.text0Content}</p>
                    </div>
                    <div className="map-container">
                        {/* kartalle paikka */}
                        <iframe
                            src="https://www.google.com/maps/"
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
                    <a href="https://www.eraluvat.fi/kalastus/kalastonhoitomaksu" target="_blank"
                        rel="noopener noreferrer" className="payment-button">
                        Maksa kalastonhoitomaksu
                    </a>
                </section>
            </main>
            {showLogin && <LoginBox data={data.loginBox} onClose={() => setShowLogin(false)} />}
        </div>
    );
};

export default Homepage