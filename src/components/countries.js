import React from 'react'
/*
country component resonsible for redering
individual countries flag and their details
*/
export default function Country({name,population,region,capital,flag,darkmode }) { //destructing props from home country component 
    
  return (
    
        <div className={`country ${darkmode? 'dark' : '' }`}>
            <div className='flag_container'>
             <img src={flag} alt='flag'/>
            </div>

            <div className={`details ${darkmode? 'dark' : '' }`}>
              <h1 className='name'>{name}</h1>
              <div className={`header2 ${darkmode? 'dark' : '' }`}>
                <h2 > Population: <span className='span' >{population }</span></h2>
                <h2 >Region: <span className='span'>{region}</span></h2>
                <h2 >Capital: <span className='span'>{capital}</span> </h2>
              </div>
            </div>

        
        </div>
        
       
    
  )
}
