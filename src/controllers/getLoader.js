import React from 'react'
import _ from 'lodash'
import * as Loaders from '../components' 

function getLoader(props) {
    const { size, type, primaryColor, secondaryColor } = props
    const style = [
        {primary: primaryColor},
        {secondary: secondaryColor}
    ]
    let SimpleLoaders = {
        Border: 'border',
        Noborder: 'noborder',
        Dbborder: 'dbborder'
    }

    let simpleType = null
    let Loader
    if(_.hasIn(SimpleLoaders, type)){
        simpleType = SimpleLoaders[type]
        Loader = Loaders.Simple
    } else {
        Loader = Loaders[type]
    }

    return <Loader
        type={simpleType ? simpleType : type}
        size={`size--${size}`}
        style={style}
    />
}

export default getLoader