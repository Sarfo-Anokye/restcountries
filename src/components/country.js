import React from 'react'

function Country({name,population,capital,region,subregion,flag, languages, currencies, topLevelDomain, nativeName}) {
   const lang= languages.map(val=>{
   return val.name
    })
    const curren=currencies.map(val=>{
        return val.name
    })
    const topLevel=topLevelDomain.map(val=>{
        return val
    })
  return (
    <div className='detailsx'>
            <div className='details_flag'>
                <img src={flag}  alt='flags'/>
            </div>
            <div className='details_information'>
                <h1>{name}</h1>
                <div className='columns'> 
                    <div className='column_1'>
                        <h3> Native Name: <span className='inner_text'>{nativeName}</span> </h3>
                        <h3> Population: <span className='inner_text'>{population}</span> </h3>
                        <h3> Region: <span className='inner_text'>{region}</span> </h3>
                        <h3> Sub Region: <span className='inner_text'>{subregion}</span> </h3>
                        <h3> Capital: <span className='inner_text'>{capital}</span> </h3>
                    </div>
                    <div className='column_2'>
                        <h3> Top Level Domain: <span className='inner_text'>{topLevel}</span> </h3>
                        <h3> Currency: <span className='inner_text'>{curren.join(', ')}</span> </h3>
                        <h3> Languages: <span className='inner_text'>{lang.join(', ')}</span> </h3>
                    </div>
                </div> 
                <h3>Border Countries: </h3>
            </div>



    </div>
  )
}

export default Country
