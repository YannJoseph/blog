import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
       <span className='logo'> <Link className='link' to='/'>Accueil</Link> </span>
       
       <ul className='list'>
           <li className='listItem'>
               <img 
               src='./images/1645115055934.jpeg' 
               alt='' 
               className='avatar'/>
           </li>
           <li className='listItem'> Yann Joseph</li>
           
       </ul>
   
    
    </div>
  )
}

export default navbar