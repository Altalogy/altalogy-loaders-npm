import React from 'react'
import StylesComponent from '../../styles/StylesComponent'
import './Multi.css'

const Multi = (props) => {
    const { style , size} = props
    const styles = StylesComponent(style)
    const bt = styles.primary && styles.primary.bt ? styles.primary.bt : {}
    return (
        <div className={`multi__loader ${size}`}>
            <div style={bt} className="multi">
                <div style={bt} className="multi">
                    <div style={bt} className="multi">
                        <div style={bt} className="multi">
                            <div style={bt} className="multi">
                                <div style={bt} className="multi">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Multi