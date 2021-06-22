import React from 'react'
import './collection-item.styles.scss'
import FormButton from '../form-button/form-button.component'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import { CollectionItemInterface } from '../../model'




const CollectionItem = ({ item, addItem }: CollectionItemInterface) => {
  const { name, price, imageUrl } = item

  return (
    <>
      <div className='collection-item'>
        <div className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <FormButton onClick={() => addItem && addItem(item)} inverted>Add to cart</FormButton>
      </div>
    </>
  )
}

const mapDispatchToProps = ((dispatch: any) => {
  return {
    addItem: (item: any) => dispatch(addItem(item))
  }
})


export default connect(null, mapDispatchToProps)(CollectionItem)