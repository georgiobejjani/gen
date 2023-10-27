import React from 'react'

export default function PartnerCard(props) {
  return (
    <div className='partnerCard'>
        <img src={props.image} alt='partner' className='partnerCard__image'/>
        <p className='partnerCard__paragraphe'>
            {props.paragraphe}
        </p>
    </div>
  )
}
