import React from 'react'

export default function Filter() {
  return (
   <div className='inputs'>
        <div className='search'>
            <input type='text'  placeholder='search for a country'></input>
        </div>

        <div className='input_select'>  
             <select name="country" id="country">
                <option value="">filter by region</option>
                <option value="Sri Lanka">Africa</option>
                <option value="Australia">America</option>
                <option value="Australia">Asia</option>
                <option value="Australia">Europe</option>
                <option value="Australia">Oceania</option>
            </select>
        </div>

    </div>
  )
};
