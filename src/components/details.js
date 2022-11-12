import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from './header';
import Country from './country';
export default function Details() {
    const [country,setCountry]=useState([]);
    const history=useHistory();
    const {name}=useParams();

    const goBack=()=>{
        history.goBack()
    }
    useEffect(()=>{
        const searchCountry=async ()=>{
                const response=await fetch(`https://restcountries.com/v2/name/${name}`)
                const data=await response.json();
                console.log(data)
                await setCountry(data)
        }

           searchCountry()
    },[])

  
   console.log(country)
  
   
  return (
    <div className='details_container'>
     <Header/>
     <button className='back_button' onClick={()=>goBack()} ><i class="fa-solid fa-arrow-left"></i> Back</button>
     
     {
         country.map(val=>(
            <Country key={country.alpha2Code} name={val.name} population={val.population} capital={val.capital} region={val.region} subregion={val.subregion} nativeName={val.nativeName} flag={val.flag} languages={val.languages} currencies={val.currencies} topLevelDomain={val.topLevelDomain}/>
         ))
     }
      
   </div>
  )
}
