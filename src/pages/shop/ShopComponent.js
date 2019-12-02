import React,{useState} from 'react'

import SHOP_DATA from './ShopData'
import './ShopComponent.scss';
import PreviewCollection from '../../components/preview-collection/CollectionPreview';



const ShopComponent = () => {
    const [state] = useState( SHOP_DATA );
    return(
        <div className='shop-page'>
           {
               state.map(({id,...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}/>
               ))
           }
        </div>
    )
}

export default ShopComponent
