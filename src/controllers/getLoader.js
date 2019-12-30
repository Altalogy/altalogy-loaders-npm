import React from 'react'
import _ from 'lodash'
import * as Loaders from '../components' 

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

function getLoader(props) {
    const { size, type, primaryColor, secondaryColor } = props
    const sizeDefault = size ? size : 'md'
    const style = [
        {primary: primaryColor},
        {secondary: secondaryColor}
    ]
    let SimpleLoaders = {
        Border: 'border',
        Noborder: 'noborder',
        Dbborder: 'dbborder',
    }
    let Lines = {
        Line: 'line',
        Line2: 'line2',
        Line3: 'line3',
    }
    let simpleType = null
    let Loader
    if(_.hasIn(SimpleLoaders, type)){
        simpleType = SimpleLoaders[type]
        Loader = Loaders.Simple
    } else if(_.hasIn(Lines, type)) {
        simpleType = Lines[type]
        Loader = Loaders.Line
    } else if(_.hasIn(Loaders, type)){
        Loader = Loaders[type]
    } else {
        Loader = Loaders.Circle
    }

    return <Loader
        type={simpleType ? simpleType : type}
        size={`size--${sizeDefault}`}
        style={style}
    />
}

export default getLoader