import React, { useState } from 'react'
import teamIcon from '../../assets/icons/iconTeam.png';
import peopleIcon from '../../assets/icons/peopleIcon.png';
import experienceIcon from '../../assets/icons/iconExperience.png';
import networkIcon from '../../assets/icons/iconNetwork.png';
export default function TeamCard(props) {

  return (
    <>
    
    <div className='teamCard'>
        <div className='teamCard__Wrapper' style = {{backgroundImage:`url(${props.img})`}}/>
        <span className='teamCard__Name'>{props.name}</span>
        <span className='teamCard__role'>{props.role}</span>
        <div className='teamCard__info'>
          <img src={teamIcon} className='teamCard__iconInfo' alt='icon'/>
          <span className='teamCard__textInfo'>{props.teamText}</span>
        </div>
        <div className='teamCard__info'>
          <img src={networkIcon} className='teamCard__iconInfo' alt='icon'/>
          <span className='teamCard__textInfo'>{props.networkText}</span>
        </div>
        <div className='teamCard__info'>
          <img src={peopleIcon} className='teamCard__iconInfo' alt='icon'/>
          <span className='teamCard__textInfo'>{props.peopleText}</span>
        </div>
        <div className='teamCard__info'>
          <img src={experienceIcon} className='teamCard__iconInfo' alt='icon'/>
          <span className='teamCard__textInfo'>{props.experienceText}</span>
        </div>
    </div>
    </>
  )
}
