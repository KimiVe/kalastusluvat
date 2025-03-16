import "./App.css";
import "../styles/Homepage.css";
import TopBar from "../TopBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <TopBar />
        <nav className="navbar">
          <ul>
            <li><Link to="/">Etusivu</Link></li>
            <li><Link to="/search">Tarkennettu haku</Link></li>
            <li><Link to="/questions">Yleiset kysymykset</Link></li>
            <li><Link to="/aboutus">Tietoa meistä</Link></li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Hae kalalupaa" />
            <button>Hae</button>
          </div>
          <button className="login-button">Kirjaudu Sisään</button>
        </nav>
      </header>
      
      <main>
        <section id="etusivu" className="info-section">
          <div className="text-content">
            <h1>Yli 1000 kalalupaa helposti saatavilla</h1>
            <p>Sivustomme tarjoaa helpon ja kätevän tavan löytää ja ostaa yli 1000 
              kalastuslupaa suoraan osakaskunnilta. Olitpa sitten intohimoinen kalastaja 
              tai vasta-alkaja, meiltä löydät tarvitsemasi luvat vaivattomasti netin kautta. 
              Säästä aikaa ja vaivaa – tutustu laajaan valikoimaamme ja hanki kalastuslupasi jo tänään!</p>
          </div>
          <div className="map-container">
          <a href="https://www.eraluvat.fi/kalastus/kalastonhoitomaksu" className="payment-button">
            Maksa kalastonhoito maksu
          </a>

          </div>
        </section>
        <section id="kalastonhoito-maksu" className="info-section">
          <h2>Kalastonhoito maksu</h2>
          <p>Muista maksaa kalastonhoitomaksu! 
            Kalastonhoitomaksu on kalastajan pakollinen perusmaksu, joka tulee maksaa, 
            jos on iältään 18–69-vuotias ja kalastaa vieheellä tai pyydyksillä tai ravustaa. 
            Tämä tarkoittaa sitä, että kun kalastat esimerkiksi virvelillä, verkoilla tai 
            katiskalla, tarvitset aina kalastonhoitomaksun. Poikkeuksena ovat kalastajat, 
            jotka ehtivät täyttää vähintään 65 vuotta 31.12.2023 mennessä.</p>
            <a href="https://www.eraluvat.fi/kalastus/kalastonhoitomaksu" 
          className="payment-button">Maksa kalastonhoito maksu</button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;