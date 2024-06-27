import React, {useState} from 'react'
import './sideMenu.css';
import navListData from '../data/NavListData';
import NavListIteam from './NavListIteam';

function SideMenu() {
    const [navData, setNavData] = useState(navListData)
  return (
    <div className='sideMenu'>
      <a href='#' className='logo'>
      <i className="bi bi-controller"></i>
      <span className='brand'>Play</span>
      </a>
      <ul className="nav">
        {navData.map(item =>(
            <NavListIteam key={item._id} item={item} />
        ))}   
      </ul>
    </div>
  )
}

export default SideMenu
