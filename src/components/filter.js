import React from 'react'

export default function Filter({searchCountry , searchRegion, darkmode}) {
   
  return (
   <div className='inputs' >
        <div className={`search ${darkmode? 'dark':''}`} >
        <i class="fa-solid fa-magnifying-glass"></i>
            <input className={`inp ${darkmode? 'dark' : '' }`} type='text' onChange={(e)=>searchCountry(e.target.value)} placeholder='Search for a country' />
        </div>

        <div className={`input_select ${darkmode? 'dark':''}`} >  
             <select className={`selec ${darkmode? 'dark':''}`} name="country" id="country" onChange={(e)=>searchRegion(e.target.value)}>
                <option value=""> Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>

    </div>
  )
};
