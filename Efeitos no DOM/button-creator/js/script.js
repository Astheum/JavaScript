const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
controles.addEventListener('change', handleChange)

const handleStyle = {
    element: btn,
    texto(value) {
        this.element.innerText = value
    },
    color(value) {
        this.element.style.color = value
    }, 
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    height(value) {
        this.element.style.height = value + 'px'
    },
    width(value) {
        this.element.style.width = value + 'px'
    },
    border(value) {
        this.element.style.border = value
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px'
    },
    fontFamily(value) {
        this.element.style.fontFamily = value
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem'
    },
}

function handleChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value
    handleStyle[name](value)
    saveValues(name, value)
    showCss()
    
}

function saveValues(name, value) {
    localStorage[name] = value
}

function setValues() {
    const properties = Object.keys(localStorage)
    properties.forEach((item) => {
        handleStyle[item](localStorage[item])
        controles.elements[item].value = localStorage[item]
    })
    showCss()
}
setValues()

function showCss() {
    cssText.innerHTML = btn.style.cssText.split('; ').join('; </span><span>')
}
