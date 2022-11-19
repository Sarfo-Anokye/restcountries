import React from 'react'


export default function Header({darkmode,toggleDarkMode}) {
  return (
<div className={`header ${darkmode?'dark' : ''}`}>
   <div className='header_container'>
   <p className='logo'> Where in The World? </p>
   <p onClick={()=>toggleDarkMode()} className='switch'>{<i class="fa-regular fa-moon"></i> } Dark Mode </p>
   </div>
</div>
  )
}
