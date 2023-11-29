class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    draw(color) {
      // Return SVG content for a circle
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${color}" />`;
    }
  }
  
  class Triangle {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    generateSVG() {
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      const points = `150,100 ${150 - this.sideLength / 2},${100 + height} ${150 + this.sideLength / 2},${100 + height}`;
  
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    generateSVG() {
      return `<rect x="${150 - this.sideLength / 2}" y="${100 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };