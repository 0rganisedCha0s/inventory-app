import React from 'react';
import { Item } from './Item';

export default function ItemsList({items,onItemClick}) {
	return (
		<div className="item-list">
		  {items.map((item, idx) => (
			<Item
			  item={item}
			  key={idx}
			  onClick={() => onItemClick(item)}
			/>
		  ))}
		</div>
	  );
	}