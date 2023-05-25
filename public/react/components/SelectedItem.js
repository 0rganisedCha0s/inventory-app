import React from 'react';

export default function SelectedItem({item, onBack}) {
    return <>
 {/* probably will have to change the class naming slightly as styling will be different, want to display the single item in the middle of the page instead at the top left with flex*/}
    <div className="single-item">
      <h3 className="single-item-name">{item.title}</h3>
      <div className="single-item-image-container">
      <img src={item.image} alt={item.title} className="single-item-image" />
      </div>
      <div className="single-item-info">
       
        <p className="single-item-description">{item.description}</p>
        <div className="single-item-bottom">
          <div className="single-item-category">{item.category}</div>
          <div className="single-item-price">£{item.price.toFixed(2)}</div>
        </div>
      </div>
      <button class="btn-standard" onClick={onBack}> Return </button>
    </div>
  </>
}