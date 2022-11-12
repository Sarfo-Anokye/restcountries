import React from 'react'

export default function Filter({searchCountry , searchRegion}) {
  return (
   <div className='inputs'>
        <div className='search'>
            <input type='text' onChange={(e)=>searchCountry(e.target.value)} placeholder='search for a country'/>
        </div>

        <div className='input_select' >  
             <select name="country" id="country" onChange={(e)=>searchRegion(e.target.value)}>
                <option value="">filter by region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>

    </div>
  )
};
