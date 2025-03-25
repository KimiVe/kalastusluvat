import { useSelector } from "react-redux";
import { AppState } from "../store";
import "./styles/SharedStyles.css";

const LicencePage = () => {

    const content = useSelector((state: AppState) => state.selectedLanguage.content)
    const licences = useSelector((state: AppState) => state.licences);
    const id = 1;

    const licence = licences.find(elemet => {
        return elemet.lupa_id === id;
    })

    if (!licence) {
        return (
            <div>
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