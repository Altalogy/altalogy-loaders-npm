import React from 'react'
import './Triple.css'
import StylesComponent from '../../styles/StylesComponent'

const Triple = (props) => {
    const { style , size } = props
    const styles = StylesComponent(style)
    const btPrimary = styles.primary && styles.primary.bt ? styles.primary.bt : {}
    const btSecondary = styles.secondary && styles.secondary.bt ? styles.secondary.bt : {}
    
    return (
        <div style={btPrimary} className={`triple__loader ${size}`}>
            <div style={btSecondary} className='div-1'></div>
            <div style={btPrimary} className='div-2'></div>
        </div>
    )
}

export default Triple