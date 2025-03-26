import { useSelector } from "react-redux";
import { AppState } from "../store";
import { useParams } from "react-router-dom";
import "./styles/SharedStyles.css";
import "./styles/LicencePage.css";

const LicencePage = () => {
    const content = useSelector((state: AppState) => state.selectedLanguage.content)
    const licences = useSelector((state: AppState) => state.licences);
    const id = useParams<{ id: string }>();

    const licence = {
        nimi: "Seinäjoki Harjus", maakunta: "Etelä-pohjanmaa",
        paikkakunta: "Seinäjoki kunta", kalalaji: "Harjus", vesisto: "Seinäjoki",
        kalastusmuoto: "virveli", aika: "06.2025-07.2025"
    }
    /*
    
        const licence = licences.find(licence => {
            //Tässä saattaa olla ongelmaa. id pitäs olla number, mutta vscode väittää, että string kelpaa?
            return licence.lupa_id === id;
        })
    */

    if (!licence) {
        return (
            <div className="content-box">
                <p>No such licence found</p>
            </div>
        )
    }
    return (
        <div className="content-box">
            <img className="licence-banner"></img>
            <p className="content-header">{licence.nimi}</p>
            <p className="content-text">{content.license.region}: {licence.maakunta}</p>
            <p className="content-text">{content.license.city}: {licence.paikkakunta}</p>
            <p className="content-text">{content.license.bodyOfWater}: {licence.vesisto}</p>
            <p className="content-text">{content.license.fish}: {licence.kalalaji}</p>
            <p className="content-text">{content.license.fishinType}: {licence.kalastusmuoto}</p>
            <p className="content-text">{content.license.time}: {licence.aika}</p>
            <div className="generic-button">{content.license.sellerButton}</div>
            <div className="buy-button">{content.license.buyButton}</div>
        </div>
    )
}

export default LicencePage