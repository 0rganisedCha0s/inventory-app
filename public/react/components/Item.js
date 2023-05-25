import React from 'react';
export const Item = ({item, onItemClick}) => {
  return <>
 
    <div className="item-container" onClick={() => onItemClick(item)}> 
      <div className="item-image-container">
      <img src={item.image} alt={item.title} className="item-image" />
      </div>
      <div className="item-info">
        <h3 className="item-name">{item.title}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-bottom">
          <div className="item-category">{item.category}</div>
          <div className="item-price">£{item.price.toFixed(2)}</div> 
         
        </div>
      </div>
    </div>
  </>
}