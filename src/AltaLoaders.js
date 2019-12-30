import React from 'react'
import getLoader from './controllers/getLoader'
import './AltaLoaders.css'

const AltaLoaders = (props) => {
    const { text, textPlace } = props

    const getLoaderWithText = (textPlace) => {
        switch(textPlace) {
            case 'top':
                return ( 
                    <div className='loader__cmp'>
                        <label>{text}</label>
                        {getLoader(props)}
                    </div>
                )
            case 'right':
                return (
                    <div className='loader__cmp'>
                        <div className='inline__loader'>
                            {getLoader(props)}
                            <label>{text}</label>
                        </div>
                    </div>
                )
            case 'bottom': 
                return (
                    <div className='loader__cmp'>
                        {getLoader(props)}
                        <label>{text}</label>
                    </div>
                )
            case 'left':
                return (
                    <div className='loader__cmp'>
                        <div className='inline__loader'>
                            <label>{text}</label>
                            {getLoader(props)}
                        </div>
                    </div>
                )
            default:
                return (
                    <div className='loader__cmp'>
                        <div className='loader'>
                            {getLoader(props)}
                        </div>
                    </div>
                )
        }
    }
    return ( 
        <div className='loaders__cnt'>
            { textPlace && textPlace.length > 0 && text && text.length > 0 ?
               getLoaderWithText(textPlace) :
                <div className='loader__cmp'>
                    <div className='loader'>
                        {getLoader(props)}
                    </div>
                </div>
            }
        </div>
    )
}

export default AltaLoaders