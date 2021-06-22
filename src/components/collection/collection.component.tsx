import React from 'react';
import './collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { CollectionInterface, Item } from '../../model'

const Collection = ({ title, items }: CollectionInterface) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.filter((_, idx) => idx < 4).map((item: Item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
)

export default Collection