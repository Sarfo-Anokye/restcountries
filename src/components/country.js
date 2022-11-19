import React from 'react'

function Country({name,population,capital,region,subregion,flag, languages, currencies, topLevelDomain, nativeName, darkmode, borders}) {
   const lang= languages.map(val=>{
   return val.name
    })
    const curren=currencies.map(val=>{
        return val.name
    })
    const topLevel=topLevelDomain.map(val=>{
        return val
    })
    
    console.log(borders)
  return (
    <div className={`detailsx ${darkmode?'dark' : ''}`}>
            <div className='details_flag'>
                <img src={flag}  alt='flags'/>
            </div>
            <div className='details_information'>
                <h1>{name}</h1>
                <div className='columns'> 
                    <div className={`column_1 ${darkmode?'dark' : ''}`}>
                        <h3 className='name'> Native Name: <span className='inner_text'>{nativeName}</span> </h3>
                        <h3 className='name'> Population: <span className='inner_text'>{population}</span> </h3>
                        <h3 className='name'> Region: <span className='inner_text'>{region}</span> </h3>
                        <h3 className='name'> Sub Region: <span className='inner_text'>{subregion}</span> </h3>
                        <h3 className='name'> Capital: <span className='inner_text'>{capital}</span> </h3>
                    </div>
                    <div className={`column_2 ${darkmode?'dark' : ''}`}>
                        <h3 className='name'> Top Level Domain: <span className='inner_text'>{topLevel}</span> </h3>
                        <h3 className='name'> Currency: <span className='inner_text'>{curren.join(', ')}</span> </h3>
                        <h3 className='name'> Languages: <span className='inner_text'>{lang.join(', ')}</span> </h3>
                    </div>
                </div> 
                <h3>Border Countries:<span>{borders? borders.map(val=>(<button className='border_button'>{val}</button>)):''} </span></h3>
            </div>



    </div>
  )
}

export default Country
