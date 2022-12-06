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

  
    

  return (
    
        <ul className='ul_locationfilter'>
           { 
           locationOptions?.map(locationOption=><li onClick={()=>getNewLocation(locationOption.url)} 
            key={locationOption.url} value={locationName.name}>
             {locationOption.name}</li>)
             
           }
           
          

           

        </ul>
        

    
  )
}

export default LocationFilter