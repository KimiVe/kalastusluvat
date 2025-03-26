import { useSelector } from 'react-redux';
import { AppState } from '../store';
import "./styles/SharedStyles.css";
import { useState } from 'react';

const MyLicences = () => {
  interface Licence {
    lupa_id: number;
    kalalaji: string;
    kalastusmuoto: string;
    maakunta: string;
    paikkakunta: string;
    vesisto: string;
    nimi: string;
    aika: string;
  }

  function drawLicence(licence: Licence) {
    return (
      <div className='licence-box'>
        <h1 className="licence-header">{licence.nimi}</h1>
        <p className="licence-info">{licence.maakunta}</p>
        <p className="licence-info">{licence.paikkakunta}</p>
        <p className="licence-info">{licence.vesisto}</p>
        <p className="licence-info">{licence.kalalaji}</p>
        <p className="licence-info">{licence.kalastusmuoto}</p>
        <p className="licence-info">{licence.aika}</p>
      </div>
    )
  }

  const content = useSelector((state: AppState) => state.selectedLanguage.content)

  const [showLicences, setShowLicences] = useState(false);

  const onClick = () => setShowLicences(!showLicences);

  const activeLicenses: Licence[] = [];
  const deactivatedLicenses: Licence[] = [];

  return (
    <div className="content-box">
      <h1>{content.myLicences.activeLicencesHeader}</h1>
      <div className="licenses-grid">
        <p>Luvat tulloo tähä</p>
        {activeLicenses.map((licence, index) => (
          <div key={index} className="licence">
            {drawLicence(licence)}
          </div>
        ))}
      </div>
      <h1 onClick={onClick}>{content.myLicences.oldLicencesHeader} ⬎</h1>
      {showLicences ?
        <div className="licensec-dropdown">
          <div className="licenses-grid">
            <p>Menneen talven luvot tulloo taas tähä</p>
            {deactivatedLicenses.map((licence, index) => (
              <div key={index} className="licence">
                {drawLicence(licence)}
              </div>
            ))}
          </div>
        </div> : null}

    </div>
  )
}

export default MyLicences
