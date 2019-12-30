import React from 'react'
import StylesComponent from '../../styles/StylesComponent'
import './Boxes.css'

const Boxes = (props) => {
    const { style , size } = props
    const children = [0,0,0,0,0,0,0,0,0]
    const styles = StylesComponent(style)
    const bgColor = styles.primary && styles.primary.bgColor ? styles.primary.bgColor : {}

    return (
        <div className={`boxes__loader ${size}`}>
            { children.map((item,idx) => {
                return <div key={idx} style={bgColor}></div>
            }) }
        </div>
    )
}

export default Boxes