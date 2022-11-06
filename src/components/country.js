import React from 'react'

export default function Country({key,name,population,region,capital,flag}) {
  return (
    
        <div className='country'>
            <div className='flag_container'>
            <img src={flag} alt='flag'/>
            </div>

            <div className='details'>
            <h1 className='name'>{name}</h1>
            <h2 > population: <span className='span' >{population }</span></h2>
            <h2>Region: <span className='span'>{region}</span></h2>
            <h2>capital: <span className='span'>{capital}</span> </h2>
            </div>

        
        </div>
        
       
    
  )
}
