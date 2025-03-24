import "./styles/SharedStyles.css";
import "./styles/Search.css";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { AppState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
    
    const content = useSelector((state:AppState) => state.selectedLanguage.content)
    
    //topbar search word is passed to here
    const location = useLocation()

    const [filter, setFilter] = useState({
        name: location.state === null ? '' : location.state.searchInput,
        fish: content.advancedSearch.fish,
        fishingType: content.advancedSearch.fishinType,
        region: content.advancedSearch.region,
        city: content.advancedSearch.city,
        bodyOfWater: content.advancedSearch.bodyOfWater
    }) 
    
    const licences = useSelector((state:AppState) => state.licences);
    const fish = [content.advancedSearch.fish, ...new Set(licences.map(licence => licence.kalalaji))]
    const fishingtype = [content.advancedSearch.fishinType, ...new Set(licences.map(licence => licence.kalastusmuoto))]
    const region = [content.advancedSearch.region,...new Set(licences.map(licence => licence.maakunta))]
    const city = [content.advancedSearch.city,...new Set(licences.map(licence => licence.paikkakunta))]
    const bodyofwater = [content.advancedSearch.bodyOfWater,...new Set(licences.map(licence => licence.vesisto))]

    const [filteredLicences, setFilteredLicences] = useState<Licence[]>([])

    useEffect(()=> {
        setFilteredLicences(licences)
    },[licences])

    useEffect(() => {
        handleSearch()
    },[filter])

    useEffect(() => {
        setFilter({
            ...filter,
            name: location.state === null ? '' : location.state.searchInput
        })
    },[location])
   

    const handleSearch = () => {
        setFilteredLicences(
            licences.filter((licence) => {
              return (
                (filter.name === '' || licence.nimi.includes(filter.name) )&&
                (filter.fish === content.advancedSearch.fish || licence.kalalaji === filter.fish) &&
                (filter.fishingType === content.advancedSearch.fishinType||
                  licence.kalastusmuoto === filter.fishingType) &&
                (filter.region === content.advancedSearch.region || licence.maakunta === filter.region) &&
                (filter.city === content.advancedSearch.city || licence.paikkakunta === filter.city) && 
                (filter.bodyOfWater === content.advancedSearch.bodyOfWater || licence.vesisto === filter.bodyOfWater)
              );
            })
          );
    }

    return (
        <div className="content-box">
            <div className="search-wrapper" >
            <div className="search-filter" style={{height: '50vh'}}>
                <input placeholder={content.advancedSearch.searchBar} className='search-field' type="text" value={filter.name} onChange={(v) => setFilter({
                    ...filter,
                    name: v.target.value
                })}/>
                <Dropdown className="dropdown" options={fish} value={content.advancedSearch.fish} onChange={(v) => setFilter({
                    ...filter,
                    fish: v.value
                })}/>
                <Dropdown className="dropdown" options={fishingtype} value={content.advancedSearch.fishinType} onChange={(v) => setFilter({
                    ...filter,
                    fishingType: v.value
                })}/>
                <Dropdown className="dropdown" options={region} value={content.advancedSearch.region} onChange={(v) => setFilter({
                    ...filter,
                    region: v.value
                })}/>
                <Dropdown className="dropdown" options={city} value={content.advancedSearch.city} onChange={(v) => setFilter({
                    ...filter,
                    city: v.value
                })}/>
                <Dropdown className="dropdown" options={bodyofwater} value={content.advancedSearch.bodyOfWater} onChange={(v) => setFilter({
                    ...filter,
                    bodyOfWater: v.value
                })}/>
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
// poistettu hae painike, tulokset päivittyy automaattisesti
 //<div className="search-button" onClick={handleSearch}> Hae</div>