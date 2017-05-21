import React from 'react'
import SideMenu from 'react-burger-menu'

import withWidth, { LARGE } from '../../HigherOrderComponents/exercise/withWidth'
import FloatingMenuBtn from '../../../FloatingMenuBtn'

const Menu = ({ isOpen, pageWrapId, width, toggleMenu}) => {


    const children = React.Children.map(children, (child) => (
    React.cloneElement(child, {
      onClick: () => toggleMenu()
    })
  ))

return (  <div>
    { width === LARGE ? '' :
      <FloatingMenuBtn toggleMenu={ toggleMenu } />
    }
    <SideMenu.slide
       isOpen={ isOpen }
       pageWrapId={ pageWrapId || 'page-wrap' }
    >
      { children }

    </SideMenu.slide>
  </div>
)
}

export default withWidth(Menu)
