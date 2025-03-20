import "./styles/SharedStyles.css";
import "./styles/Search.css";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { AppState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Searchpage = () => {
    interface Licence {
        lupa_id: number;
        kalalaji: string;
        kalastusmuoto: string;
        maakunta: string;
        paikkakunta: string;
        vesisto: string;
        nimi: string;
      }

    const [filter, setFilter] = useState({
        kalalaji: 'Kalalaji',
        kalastusmuoto: 'Kalastusmuoto',
        maakunta: 'Maakunta',
        paikkakunta: 'Paikkakunta',
        vesisto: 'Vesistö'
    }) 
    const licences = useSelector((state:AppState) => state.licences);
    const kalalaji = ['Kalalaji', ...new Set(licences.map(licence => licence.kalalaji))]
    const kalastusmuoto = ['Kalastusmuoto', ...new Set(licences.map(licence => licence.kalastusmuoto))]
    const maakunta = ['Maakunta',...new Set(licences.map(licence => licence.maakunta))]
    const paikkakunta = ['Paikkakunta',...new Set(licences.map(licence => licence.paikkakunta))]
    const vesisto = ['Vesistö',...new Set(licences.map(licence => licence.vesisto))]

    const [filteredLicences, setFilteredLicences] = useState<Licence[]>([])

    useEffect(()=> {
        setFilteredLicences(licences)
    },[licences])


    const handleSearch = () => {
        setFilteredLicences(
            licences.filter((licence) => {
              return (
                (filter.kalalaji === 'Kalalaji' || licence.kalalaji === filter.kalalaji) &&
                (filter.kalastusmuoto === 'Kalastusmuoto' ||
                  licence.kalastusmuoto === filter.kalastusmuoto) &&
                (filter.maakunta === 'Maakunta' || licence.maakunta === filter.maakunta) &&
                (filter.paikkakunta === 'Paikkakunta' || licence.paikkakunta === filter.paikkakunta) && 
                (filter.vesisto === 'Vesistö' || licence.vesisto === filter.vesisto)
              );
            })
          );
    }

    return (
        <div className="content-box">
            <div className="search-wrapper" >
            <div className="search-filter" style={{height: '50vh'}}>
                <input placeholder="Hakusana" className='search-field' type="text" />
                <Dropdown className="dropdown" options={kalalaji} value={'Kalalaji'} onChange={(v) => setFilter({
                    ...filter,
                    kalalaji: v.value
                })}/>
                <Dropdown className="dropdown" options={kalastusmuoto} value={'Kalastusmuoto'} onChange={(v) => setFilter({
                    ...filter,
                    kalastusmuoto: v.value
                })}/>
                <Dropdown className="dropdown" options={maakunta} value={'Maakunta'} onChange={(v) => setFilter({
                    ...filter,
                    maakunta: v.value
                })}/>
                <Dropdown className="dropdown" options={paikkakunta} value={'Paikkakunta'} onChange={(v) => setFilter({
                    ...filter,
                    paikkakunta: v.value
                })}/>
                <Dropdown className="dropdown" options={vesisto} value={'Vesistö'} onChange={(v) => setFilter({
                    ...filter,
                    vesisto: v.value
                })}/>
                <div className="search-button" onClick={handleSearch}> Hae</div>
            </div>
            <div className="licences">
                {filteredLicences.map((licence) => (
                    <div className="licence-container" key={licence.lupa_id}> 
                        {licence.nimi}
                    </div>
                ))}
            </div>
            </div>
            
        </div>
    )
}

export default Searchpage