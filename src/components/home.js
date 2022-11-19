import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import Filter from './filter';
import Country from './countries';
function Home({darkmode,toggleDarkMode}) {
    const [countries, setCountries]=useState([]);
    useEffect(()=>{
        try{
          fetchData()
        }catch(error){
          console.log(error)
        }
      },[])
    
      const fetchData=async ()=>{
        const response= await fetch("https://restcountries.com/v2/all");
        const data= await response.json();
        setCountries(data);
        console.log(countries)
      }
      const searchCountry=async value=>{
          if(value !==''){
          const response=await fetch(`https://restcountries.com/v2/name/${value}`);
          const data=await response.json();
          if(data.length>0){
          await setCountries(data)
          }
          }
      }
     
      const searchRegion=async value=>{
          if(value!==''){
              const response=await fetch(`https://restcountries.com/v2/region/${value}`)
              const data=await response.json();
              if(data.length>1){
              await setCountries(data)
              }
          }else{
            fetchData()
          }
      }
      const isAvailable=countries.length !==0? true:false;
      console.log(isAvailable)
       
  return (
    <div>
      <Header darkmode={darkmode}  toggleDarkMode={toggleDarkMode}/>
      <Filter darkmode={darkmode}  searchCountry={searchCountry} searchRegion={searchRegion}/>
      <div className='country_container'>
     {
      countries.map((country,index)=>(
           <Link style={{textDecoration:"none"}} to={`/details/${country.name}`} key={index}>
        <Country
        key={country.alpha2Code}
        name={country.name}
        region={country.region}
        population={country.population}
        capital={country.capital}
        flag={country.flag}
        darkmode={darkmode}
        />
        </Link>
        ) )
     }
  
    </div>
    </div>
  )
}

export default Home
