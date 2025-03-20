import "./styles/SharedStyles.css";
import './styles/TopBar.css'
import './styles/Links.css'
import 'react-dropdown/style.css'
import './topbar/TopBar.tsx';
import './Footer.tsx'
import './topbar/MyInformation.tsx'

const handleButtonClick = () => {
  window.location.href = "https://www.eraluvat.fi/kalastus/kalastonhoitomaksu";
};

const Homepage = () => {
  return (
    <div className="homepage">
      <main>
        <section id="etusivu" className="info-section">
          <div className="content-container">
            <div className="content-box text-content">
              <h1 className="content-text-header">Yli 1000 kalalupaa helposti saatavilla</h1>
              <p className="content-text">
                Sivustomme tarjoaa helpon ja kätevän tavan löytää ja ostaa yli 1000 
                kalastuslupaa suoraan osakaskunnilta. Olitpa sitten intohimoinen kalastaja 
                tai vasta-alkaja, meiltä löydät tarvitsemasi luvat vaivattomasti netin kautta. 
                Säästä aikaa ja vaivaa – tutustu laajaan valikoimaamme ja hanki kalastuslupasi jo tänään!
              
              </p>
            </div>
          </div>
        </section>

        <section id="kalastonhoito-maksu" className="info-section">
          <div className="content-container">
            <div className="content-box text-content">
              <h2 className="content-text-header">Kalastonhoito maksu</h2>
              <p className="content-text">
                Muista maksaa kalastonhoitomaksu! 
                Kalastonhoitomaksu on kalastajan pakollinen perusmaksu, joka tulee maksaa, 
                jos on iältään 18–69-vuotias ja kalastaa vieheellä tai pyydyksillä tai ravustaa. 
                Tämä tarkoittaa sitä, että kun kalastat esimerkiksi virvelillä, verkoilla tai 
                katiskalla, tarvitset aina kalastonhoitomaksun. Poikkeuksena ovat kalastajat, 
                jotka ehtivät täyttää vähintään 65 vuotta 31.12.2023 mennessä.
              </p>
              <button className="kalastonhoito-btn" onClick={handleButtonClick}>
                Maksa kalastonhoito maksu
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;