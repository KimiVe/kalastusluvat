import { useSelector } from "react-redux";
import { AppState } from "../store";
import "./styles/SharedStyles.css";
import { useParams } from "react-router-dom";

const LicencePage = () => {
    const content = useSelector((state: AppState) => state.selectedLanguage.content)
    const licences = useSelector((state: AppState) => state.licences);
    const id = useParams<{ id: string }>();

    const licence = licences.find(licence => {
        //Tässä saattaa olla ongelmaa. id pitäs olla number, mutta vscode väittää, että string kelpaa?
        return licence.lupa_id === id;
    })

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
            <p className="licencePage-header">{licence.nimi}</p>
            <p className="licencePage-info">{content.license.region}: {licence.maakunta}</p>
            <p className="licencePage-info">{content.license.city}: {licence.paikkakunta}</p>
            <p className="licencePage-info">{content.license.bodyOfWater}: {licence.vesisto}</p>
            <p className="licencePage-info">{content.license.fish}: {licence.kalalaji}</p>
            <p className="licencePage-info">{content.license.fishinType}: {licence.kalastusmuoto}</p>
            <p className="licencePage-info">{content.license.time}: {licence.aika}</p>
            <div className="generic-button">{content.license.sellerButton}</div>
            <div className="generic-button">{content.license.buyButton}</div>
        </div>
    )
}

export default LicencePage