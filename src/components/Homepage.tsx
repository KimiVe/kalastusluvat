import "./styles/SharedStyles.css";
import './styles/TopBar.css'
import './styles/Links.css'
import 'react-dropdown/style.css'
import './topbar/TopBar.tsx';
import './Footer.tsx'
import './topbar/MyInformation.tsx'
import { AppState } from '../store'
import { useSelector} from "react-redux";

const Homepage = () => {
  const textContent = useSelector((state: AppState) => state.selectedLanguage.content);

  const handleButtonClick = () => {
      window.location.href = "https://www.eraluvat.fi/kalastus/kalastonhoitomaksu";
  };

  return (
      <div className="homepage">
          <main>
              <section id="etusivu" className="info-section">
                  <div className="content-container">
                      <div className="content-box text-content">
                          <h1 className="content-text-header">{textContent.frontPage.text0Header}</h1>
                          <p className="content-text">{textContent.frontPage.text0Content}</p>
                      </div>
                  </div>
              </section>
              <section id="kalastonhoito-maksu" className="info-section">
                  <div className="content-container">
                      <div className="content-box text-content">
                          <h2 className="content-text-header">{textContent.frontPage.text1Header}</h2>
                          <p className="content-text">{textContent.frontPage.text1Content}</p>
                          <button className="kalastonhoito-btn" onClick={handleButtonClick}>
                              {textContent.frontPage.text1Button}
                          </button>
                      </div>
                  </div>
              </section>
          </main>
      </div>
  );
};

export default Homepage;