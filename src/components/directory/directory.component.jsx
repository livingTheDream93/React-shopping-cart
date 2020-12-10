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
        {this.state.section.map(({id, ...sectionProps}) => {
          return (
            <MenuItem
              key={id}
              {...sectionProps}
            />
          );
        })}
      </div>
    )
  }

}

export default Directory