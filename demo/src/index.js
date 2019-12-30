import React, {Component} from 'react'
import {render} from 'react-dom'
import './style.css'
import AltaLoaders from '../../src/AltaLoaders'

const DATA = [
  'Circle',
  'Border',
  'Multi',
  'Triple',
  'Noborder',
  'Reverse',
  'Dbborder',
  'Dots',
  'Boxes',
  'Line',
  'Line2',
  'Line3',
]

class Demo extends Component {
  render() {
    return (
      <div className='container'>
        <header>
          <img src='../../src/assets/altaloaders.png' alt='logo-AL'/>
          <h1>AltaLoaders</h1>
        </header>
        <div className='altaloaders__demo__cmp'>
          { DATA.map((loader,idx) => {
            return (
              <div key={idx} className='altaloaders__demo'>
                <AltaLoaders type={loader} />
                <div className='type'>{`type: ${loader}`}</div>
              </div>
            )
          })}
          {/* <AltaLoaders
            type='Circle'
            size='md'
            primaryColor='#44ce90'
            secondaryColor=''
            text='Kuba is typing ...'
            textPlace='bottom'
          /> */}
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
