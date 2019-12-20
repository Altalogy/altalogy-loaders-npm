import React from 'react'
import './Simple.css'
import StylesComponent from '../../styles/StylesComponent'

const Simple = (props) => {
    const { style , size , type} = props
    const styles = StylesComponent(style)
    const bt = styles.primary && styles.primary.bt ? styles.primary.bt : {}
    return (
        <div
            style={bt}
            className={`${type}__loader ${size}`}>
        </div>
    )
}

export default Simple