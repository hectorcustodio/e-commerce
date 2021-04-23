import React from 'react';
import './collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

export interface Item {
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

interface Collection {
    title: string,
    items: Array<Item>
}

const Collection = ({ title, items }: Collection) => (
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