import React from 'react';
import awardImage from "../../assets/img/hero-icons/african-award.png";

const AwardImage = () => {
  return (
    <div>
    <img src={awardImage} alt='award' className='award__img img-fluid' />
    </div>
  )
}

export default AwardImage