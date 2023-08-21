import '../../css/NavBar.css'

import { isMobile } from 'react-device-detect'
import "../../css/home/AccessibilityBar.css"

const AccessibilityBar = () => {

  
  if(isMobile) {
    return (
      <div>
        <nav className='background-accessibility'>

        </nav>
      </div>
    )
  } else {
      return (
        <div>
          <nav className='background-accessibility'>
          </nav>
        </div>
      )
  }
}

export default AccessibilityBar