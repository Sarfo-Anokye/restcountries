import React, { useEffect,useState } from 'react'

import {Link} from 'react-router-dom';

// destructuring props passed from details component
function Country({name,population,capital,region,subregion,flag, languages, currencies, topLevelDomain, nativeName, darkmode, borders}) {
    const [bordernames,setBorderNames]=useState([]) //storing state of border countries full names dor rendering
 
   const lang= languages.map(val=>{ //maping array of languages objects to an array for rendering
   return val.name
    })

    const curren=currencies.map(val=>{//maping array of currencies objects to an array for rendering
        return val.name
    })

    const topLevel=topLevelDomain.map(val=>{//maping array of topLevelDomains objects to an array for rendering
        return val
    })
    
//    function for fetching countries based on thier alpha code
    const fetchBorderNames=async (val)=>{
        const response=await fetch(`https://restcountries.com/v2/alpha/${val}`);
        const data=await response.json()
        setBorderNames(prev=>[...prev,data]) //adding the data to bordernames state

    }

// function for looping through alpha codes and passing each value to the fetchBorderNames function to fetch the api
    const bordenamesloop=(arr)=>{
        if(arr){
            arr.forEach(element=>{
                fetchBorderNames(element)
            })
        }
    }
    useEffect(()=>{ //useEffect for calling the bordernamesLoop function
        bordenamesloop(borders)
    },[])

    console.log(bordernames);
    console.log(borders);
    

 
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
                <h3 className='bh2'>Border Countries:<span className='span-borders'>{borders? bordernames.map((val,index)=>(<Link  style={{textDecoration:"none"}}  to={`/details/${val.name}`}  key={index}><button className={`border_button ${darkmode?'dark' : ''}`}>{val.name}</button></Link>)):''} </span></h3>
            </div>



    </div>
  )
}

export default Country
