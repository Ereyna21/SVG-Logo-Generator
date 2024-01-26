class Triangle {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><polygon points="100,0 0,200 200,200" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="36">${this.text}</text></svg>`;
    }
}

module.exports = Triangle;