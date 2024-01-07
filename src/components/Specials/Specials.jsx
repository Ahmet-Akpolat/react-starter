import React from 'react'
import "..//Specials/Specials.css"
import { Link } from 'react-router-dom'

export default function Specials(props) {
  return (
    <div className='specials'>
      <img className='productImage' src={props.link} />
      <div className='productText'>
        <p className='productDesc'>{props.desc}</p>
        <Link className='goShop'>Alışverişe Başla {'❯'}</Link>
      </div>
      
    </div>
  )
}
