import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from './header';
import Country from './country';
  /*
  component for rendering  details information 
  of acparticular country when clicked on at the home page
  */    
export default function Details({darkmode,toggleDarkMode}) { //destruturing props passed from root component
    const [country,setCountry]=useState([]);
    const history=useHistory(); 
    const {name}=useParams();  //destructuring the name parameter 

    const goBack=()=>{
        history.goBack()
    }
    /*
    collecting the name parameter from the address bar and using
    it to fetch that particular country and saving it to Country variable for rendring
    */ 
    useEffect(()=>{
        const searchCountry=async ()=>{
                const response=await fetch(`https://restcountries.com/v2/name/${name}`)
                const data=await response.json();
                console.log(data)
                await setCountry(data)
        }

           searchCountry()
    },[name]) //re-rendring based on the name parameter changes


  console.log(country)
  return (
    <div className={`details_container ${darkmode? 'dark' : '' }`}>
     <Header darkmode={darkmode} toggleDarkMode={toggleDarkMode}/>
     <div className={`button_holder ${darkmode? 'dark' : '' }` } onClick={()=>goBack()}>
        <i class="fa-solid fa-arrow-left"></i>
        <button className='back_button'>Back </button>
    </div>
     
     {
         country.map(val=>(
            <Country darkmode={darkmode} key={val.alpha2Code} name={val.name} population={val.population} capital={val.capital} region={val.region} subregion={val.subregion} nativeName={val.nativeName} flag={val.flag} languages={val.languages} currencies={val.currencies} topLevelDomain={val.topLevelDomain} borders={val.borders}/>
         ))
     }
      
   </div>
  )
}
