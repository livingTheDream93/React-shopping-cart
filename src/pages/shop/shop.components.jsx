import React from 'react'
import { PreviewCollection } from '../../components/preview-collection/preview-collection.component'
import { SHOP_DATA } from '../../data/shopdata'

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: SHOP_DATA
    }
  }
  render() {
    const {collection} = this.state
    return (
      <div className="shop-page">
        {
          collection.map(({ id, ...otherCollectionProps}) => {
            return <PreviewCollection key={id} {...otherCollectionProps}  />
          })
        }
      </div>
    )
  }
}

export default ShopPage