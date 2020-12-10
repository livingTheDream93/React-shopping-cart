import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import { sections } from './directory.data'
import './directory.styles.scss'


class Directory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: sections
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({title, id, imageUrl, size}) => {
          return <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} subtitle="Shop Now"/>
        })}
      </div>
    )
  }

}

export default Directory