import React from 'react'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections.overview.scss';
import PreviewCollection from '../preview-collection/CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
    {
      collections.map(({id,...otherCollectionProps}) => (
          <PreviewCollection key={id} {...otherCollectionProps}/>
      ))}
    </div>
  )
}






const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview 
});

export default connect(mapStateToProps)(CollectionsOverview)
