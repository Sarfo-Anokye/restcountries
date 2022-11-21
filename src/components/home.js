import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import Filter from './filter';
import Country from './countries';
// home component
/*
this component is responible for fetching all countries
and also for fetching the countries based on its search term and region value


*/
function Home({darkmode,toggleDarkMode}) {
    // fetching all coutries and seting it response to the setCountries use state
    const [countries, setCountries]=useState([])  //setting the data collected from the api 

    useEffect(()=>{
        try{
          fetchData()
        }catch(error){
          console.log(error)
        }
      },[])
     
      // async function for fetching data from the API
      const fetchData=async ()=>{
        const response= await fetch("https://restcountries.com/v2/all"); //fetchimg all countries API
        const data= await response.json();
        setCountries(data);
      }

      // async function for searching for a particular country based on its search term
      const searchCountry=async value=>{
          if(value !==''){
          const response=await fetch(`https://restcountries.com/v2/name/${value}`); //fetching countries based on searc term provided
          const data=await response.json();
          if(data.length>0){
          await setCountries(data)
          }
          }else{
            fetchData();
          }
      }
     // async function for searching for a group of countries based on its selected value
      const searchRegion=async value=>{
          if(value!==''){
              const response=await fetch(`https://restcountries.com/v2/region/${value}`) //fecting all counttries based on region
              const data=await response.json();
              if(data.length>1){
              await setCountries(data);
              }
          }else{
            fetchData();
          }
      }
    
       
  return (
    <div>
      <Header darkmode={darkmode}  toggleDarkMode={toggleDarkMode}/>
      <Filter darkmode={darkmode}  searchCountry={searchCountry} searchRegion={searchRegion}/>
      <div className='country_container'>
     {
      countries.map((country,index)=>(   //rendring the fetched countries and passig props to country component for rendeing
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
