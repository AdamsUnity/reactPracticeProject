import React from "react";
import { bottomItems } from "../../data";
import "./Bottom.css";

const BottomSection = () => {
  return (
    <div className='bottom--section container'>
      {bottomItems.map((item) => (
        <div className='bottom--contents'>
          <img src={item.imgSrc} alt='' className='img--content' />
          <div className='bottom--container'>
            <p className='id--no'>{item.id}</p>
            <h3 className='bottom--title'>{item.contentTitle}</h3>
            <p className='bottom--details'>{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomSection;
