interface Licence {
  name: string;
  city: string;
  region: string;
  bodyOfWater: string;
  fish: string;
  fishingType: string;
  time: string;
}

function Licence({ name, region, city, bodyOfWater, fish, fishingType, time }: Licence) {
  return (
    <div className="licence-box">
      <h1 className="licence-header">{name}</h1>
      <p className="licence-info">{region}</p>
      <p className="licence-info">{city}</p>
      <p className="licence-info">{bodyOfWater}</p>
      <p className="licence-info">{fish}</p>
      <p className="licence-info">{fishingType}</p>
      <p className="licence-info">{time}</p>
    </div>
  )

}


export default Licence;
