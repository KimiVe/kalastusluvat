import { useSelector } from 'react-redux';
import { AppState } from '../store';
import Licence from './License';


const MyLicenses = () => {
  const content = useSelector((state: AppState) => state.selectedLanguage.content)

  const activeLicenses: Licence[] = [];
  const deactivatedLicenses: Licence[] = [];

  return (
    <div className="content-box">
      <p>test</p>
      <h1>{content.myLicences.activeLicencesHeader}</h1>
      <div className="licenses-grid">
        {activeLicenses.map((licence) => (
          <Licence
            name={licence.name}
            region={licence.region}
            city={licence.city}
            bodyOfWater={licence.bodyOfWater}
            fish={licence.fish}
            fishingType={licence.fishingType}
            time={licence.time}
          />
        ))}
      </div>

      <h1>{content.myLicences.oldLicencesHeader}</h1>
      <div className="licensec-dropdown">
        <div className="licenses-grid">
          {deactivatedLicenses.map((licence) => (
            <Licence
              name={licence.name}
              region={licence.region}
              city={licence.city}
              bodyOfWater={licence.bodyOfWater}
              fish={licence.fish}
              fishingType={licence.fishingType}
              time={licence.time}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyLicenses
