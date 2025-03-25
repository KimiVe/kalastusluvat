import { useSelector } from 'react-redux';
import { AppState } from '../store';


const MyLicences = () => {
  const content = useSelector((state: AppState) => state.selectedLanguage.content)
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
  const activeLicenses: Licence[] = [];
  const deactivatedLicenses: Licence[] = [];

  function drawLicence(licence: Licence) {
    <>
      <h1 className="licence-header">{licence.nimi}</h1>
      <p className="licence-info">{licence.maakunta}</p>
      <p className="licence-info">{licence.paikkakunta}</p>
      <p className="licence-info">{licence.vesisto}</p>
      <p className="licence-info">{licence.kalalaji}</p>
      <p className="licence-info">{licence.kalastusmuoto}</p>
      <p className="licence-info">{licence.aika}</p>
    </>

  }

  return (
    <div className="content-box">
      <p>test</p>
      <h1>{content.myLicences.activeLicencesHeader}</h1>
      <div className="licenses-grid">
      </div>

      <h1>{content.myLicences.oldLicencesHeader}</h1>
      <div className="licensec-dropdown">
        <div className="licenses-grid">

        </div>
      </div>
    </div>
  )
}

export default MyLicences
