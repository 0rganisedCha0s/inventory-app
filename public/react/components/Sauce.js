import React from 'react';

export const Sauce = ({sauce}) => {

  return <> (
  
  {/*  <h3>{props.sauce.name}</h3>
   <img src={props.sauce.image} alt={props.sauce.name} />*/}
   <div className= "sauce-container">
    <div className="img-container">
      <img src={sauce.image} alt={sauce.name} className="sauce-image" />
      <div className="sauce-info">
        <h3 className="sauce-name">{sauce.name}</h3>
        <p className="sauce-description">{sauce.description}</p>
          <span className="sauce-category">{sauce.category}</span>
          <span className="sauce-price">{sauce.price}</span>
      </div>
    </div>
  </div>
  );
  </>
}
	