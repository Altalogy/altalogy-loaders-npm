import React from 'react'
import StylesComponent from '../../styles/StylesComponent'
import './Line.css'

const Line = (props) => {
    const { style, size, type } = props
    const styles = StylesComponent(style)
    const bgColor = styles.primary && styles.primary.bgColor ? styles.primary.bgColor : {}
    return (
        <div className={`${type}__loader line__${size}`}>
            <div className={size} style={bgColor}></div>
        </div>
    ) 
}

export default Line