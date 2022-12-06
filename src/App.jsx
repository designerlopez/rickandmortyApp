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
        <div className="filter_container">
        <input
          id="searchValue"
          onChange={handleChangeInput}
          type="text"
          placeholder="search your dimension"
          />
          <LocationFilter className="locationFilter" locationName={locationName} getNewLocation={getNewLocation}/>
        
        </div>
        
        <button type="submit">Search</button>
      </form>
      </div>

      
    
      <LocationInfo location={location} />
      <ResidentList location ={location}/>
    </div>
  );
}

export default App;
