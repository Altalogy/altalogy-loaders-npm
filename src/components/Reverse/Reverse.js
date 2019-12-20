import React from 'react'
import './Reverse.css'
import StylesComponent from '../../styles/StylesComponent'

const Reverse = (props) => {
    const { style , size } = props
    const styles = StylesComponent(style)
    let border = {}

    if(styles.primary && styles.primary.bt && styles.primary.bt.borderTopColor && styles.primary.bl && styles.primary.bl.borderLeftColor){
        border.borderTopColor = styles.primary.bt.borderTopColor
        border.borderLeftColor = styles.primary.bl.borderLeftColor
    }
    return (
        <div style={border} className={`reverse__loader ${size}`}>
            <div style={border} className='reverse__div'></div>
        </div>
    )
}

export default Reverse