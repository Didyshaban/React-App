import React , {useState} from 'react'
import "../App.css";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
  return (
    <div className='Navbar'> 
       <div className='Left-side'>
       <div className='Links' id = { showLinks ? "hidden" : ""} >
        <a href='/home'>Home</a>
        <a href='/profile'>Profile</a>
        <a href='/blog'>Blog</a>
        <a href='/contactus'>Contactus</a>
        <button>Open</button>
        </div>
       </div>
       
       <div className='Right-side'>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
       </div>
      
    </div>
  )
}

export default Navbar
