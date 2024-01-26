class Circle {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="50" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="36">${this.text}</text></svg>`
    }
}

module.exports = Circle;
