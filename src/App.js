
import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import Country from './components/country';

function App() {
  const [countries, setCountries]=useState([]);

  useEffect(()=>{
    try{
      fetchData()
    }catch(error){
      console.log(error)
    }
  })

  const fetchData=async ()=>{
    const response= await fetch("https://restcountries.com/v2/all");
    const data= await response.json();
    setCountries(data);
    console.log(countries)
  }

  return (
    <div className='main'>
      <Header/>
      <Filter/>
     <div className='country_container'>
     {
       countries.map(country=>(
        <Country
        key={country.alpha2Code}
        name={country.name}
        region={country.region}
        population={country.population}
        capital={country.capital}
        flag={country.flag}
        />
        ) )
     };
  
    </div>
   </div>
  )
};

export default App;
