import React from 'react'
import StylesComponent from '../../styles/StylesComponent'
import './Dots.css'

const Dots = (props) => {
    const { style , size} = props
    const styles = StylesComponent(style)
    const bgColor = styles.primary && styles.primary.bgColor ? styles.primary.bgColor : {}
    return (
        <div className={`dot__loader ${size}`}>
            <div style={bgColor} className="dot"></div>
            <div style={bgColor} className="dot dot--2"></div>
            <div style={bgColor} className="dot dot--3"></div>
        </div>
    )
}

export default Dots