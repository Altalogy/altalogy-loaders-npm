const StylesComponent = (style) => {
    const regex = /^#[0-9A-F]{6}$/i
    const regex2 = /^#([0-9A-F]{3}){1,2}$/i
    let styles = {}

    style.map((color) => {
        if(color && color.primary && (regex.test(color.primary) || regex2.test(color.primary))) {
            styles.primary = {
                color: {color: color.primary},
                bgColor: {backgroundColor: color.primary},
                bt: {borderTopColor: color.primary},
                br: {borderRightColor: color.primary},
                bb: {borderBottomColor: color.primary},
                bl: {borderLeftColor: color.primary},
            }
        } else if(color && color.secondary && (regex.test(color.secondary) || regex2.test(color.secondary))) {
            styles.secondary = {
                color: {color: color.secondary},
                bgColor: {backgroundColor: color.secondary},
                bt: {borderTopColor: color.secondary},
                br: {borderRightColor: color.secondary},
                bb: {borderBottomColor: color.secondary},
                bl: {borderLeftColor: color.secondary},
            }
        }
    })

    return styles
}

export default StylesComponent