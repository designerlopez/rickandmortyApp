import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationFilter from "./components/LocationFilter";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import ResidentList from "./components/ResidentList";
import getRandomNumber from "./utils/getRandomNumber";

function App() {
  const [location, setLocation] = useState();
  const [locationName, setLocationName] = useState()

  const getDataDimension = (idDimension) => {
    const URL = `https://rickandmortyapi.com/api/location/${idDimension}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => {
        alert("Does not exist")
        console.log(err);
      });
  };

  useEffect(() => {
    const randomDimension = getRandomNumber();
    getDataDimension(randomDimension);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dimensionSearch = event.target.searchValue.value;

    getDataDimension(dimensionSearch);
  };

  const handleChangeInput=(event)=>{
    setLocationName(event.target.value);
  }

  const getNewLocation=(URL)=>{
    axios.get(URL)
    .then(res=>setLocation(res.data))
    .catch(err=>console.log(err))

  }

  return (
    <div className="App">
      <div className="header-App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="searchValue"
          list={<LocationFilter/>}
          onChange={handleChangeInput}
          type="text"
          placeholder="search your dimension"

        />
        
        <button type="submit">Search</button>
      </form>
      </div>

      <LocationFilter locationName={locationName} getNewLocation={getNewLocation}/>
    
      <LocationInfo location={location} />
      <ResidentList location ={location}/>
    </div>
  );
}

export default App;
