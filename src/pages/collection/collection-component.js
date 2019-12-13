import React from 'react'
import { connect } from 'react-redux';

import './collection-component.scss';

import CollectionItem from '../../components/collection-item/CollectionItem';


import { selectCollections } from '../../redux/shop/shop.selectors';


const CollectionPage = ({ collection }) => {

  const {title, items} = collection;
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
         {
           items.map( 
             item => <CollectionItem key={item.id} item={item}/>
                    )
         }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);
