import React from 'react';
export const Item = ({item}) => {
  return <>
   {/*<h3>{props.item.name}</h3>*/}
    {/*<img src={props.item.image} alt={props.item.name} />*/}
    <div className="item-container">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-bottom">
          <span className="item-category">{item.category}</span>
          <span className="item-price">{item.price}</span>
        </div>
      </div>
    </div>
  </>
}