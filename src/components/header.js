import React from 'react'

// componen for rendering the heeader
export default function Header({darkmode,toggleDarkMode}) { //detructuring props passed from Home component
  return (
<div className={`header ${darkmode?'dark' : ''}`}>
   <div className='header_container'>
   <p className='logo'> Where in The World? </p>
   <p onClick={()=>toggleDarkMode()} className='switch'>{<i class="fa-regular fa-moon"></i> } Dark Mode </p>
   </div>
</div>
  )
}
