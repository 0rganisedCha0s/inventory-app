import React from 'react';

export default function SelectedItem({item, onBack}) {
    return <>
 {/* probably will have to change the class naming slightly as styling will be different, want to display the single item in the middle of the page instead at the top left with flex*/}
    <div className="single-item">
      <div className="item-image-container">
      <img src={item.image} alt={item.title} className="item-image" />
      </div>
      <div className="item-info">
        <h3 className="item-name">{item.title}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-bottom">
          <div className="item-category">{item.category}</div>
          <div className="item-price">{item.price}</div>
        </div>
      </div>
      <button class="btn-standard" onClick={onBack}> Return </button>
    </div>
  </>
}