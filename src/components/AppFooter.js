import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Turyian Psyneuronics
        </a>
        <span className="ms-1">&copy; 2022 Turiyan Psyneuronics</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
