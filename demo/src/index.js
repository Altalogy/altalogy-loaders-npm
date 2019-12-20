import React, {Component} from 'react'
import {render} from 'react-dom'

import AltaLoaders from '../../src/AltaLoaders'

class Demo extends Component {
  render() {
    return <div>
      <h1>altaloaders-npm Demo</h1>
      <AltaLoaders
        type='Circle'
        size='md'
        primaryColor='#44ce90'
        secondaryColor=''
        text='Kuba is typing ...'
        textPlace='bottom'
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
