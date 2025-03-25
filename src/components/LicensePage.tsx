import { useSelector } from "react-redux";
import Licence from "./License";
import { AppState } from "../store";
import "./styles/SharedStyles.css";

function LicencePage(licence: Licence) {

    const content = useSelector((state: AppState) => state.selectedLanguage.content)

    return (
        <div className="content-box">
            <img className="licence-banner"></img>
            <p className="licencePage-header">{licence.name}</p>
            <p className="licencePage-info">{content.license.region}: {licence.region}</p>
            <p className="licencePage-info">{content.license.city}: {licence.city}</p>
            <p className="licencePage-info">{content.license.bodyOfWater}: {licence.bodyOfWater}</p>
            <p className="licencePage-info">{content.license.fish}: {licence.fish}</p>
            <p className="licencePage-info">{content.license.fishinType}: {licence.fishingType}</p>
            <p className="licencePage-info">{content.license.time}: {licence.time}</p>
            <div className="generic-button">{content.license.sellerButton}</div>
            <div className="generic-button">{content.license.buyButton}</div>
        </div>
    )
}

export default LicencePage