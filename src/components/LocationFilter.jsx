import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationFilter = ({locationName, getNewLocation}) => {

    const [locationOptions, setLocationOptions] = useState([])
    useEffect(() => {
       
        const URL=`https://rickandmortyapi.com/api/location?name=${locationName}`
       
        axios.get(URL)
        .then(res=>setLocationOptions(res.data.results))
        .catch(err=>console.log(err))

    }, [locationName])

    console.log(locationOptions.value);
    

  return (
    
        <ul>
           { 
           locationOptions?.map(locationOption=><option onClick={()=>getNewLocation(locationOption.url)} 
            key={locationOption.url} value={locationName.name}>
             {locationOption.name}</option>)
             
           }
           
          

           

        </ul>
        

    
  )
}

export default LocationFilter