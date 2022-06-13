import React from 'react'
import { Link } from 'react-router-dom'


const navbar = () => {

  return (
    
    <div className='navbar'>

       <span className='logo'> <Link className='link' to='/'>Accueil</Link> </span>
       
       <ul className='list'>
         
       <Link className='link'to='contact'>Yann Joseph</Link>    
           
       </ul>
   
    
    </div>
  )
}

export default navbar