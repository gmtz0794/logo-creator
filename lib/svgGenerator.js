const { createWriteStream, mkdir } = require('fs/promises');
const { join } = require('path');
const { createSvgDocument } = require('./document');
const { Circle, Triangle, Square } = require('./shapes');
const { getColor } = require('./colors');

class SvgGenerator {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
  }

  async generateSvg() {
    let shape;

    switch (this.shapeType) {
      case 'circle':
        shape = new Circle(50);
        break;
      case 'triangle':
        shape = new Triangle(60, 40);
        break;
      case 'square':
        shape = new Square(70);
        break;
      default:
        throw new Error('Invalid shape type');
    }

    const svgContent = createSvgDocument(
      this.text,
      this.textColor,
      shape.draw(this.shapeColor) // Directly use the provided shape color
    );

    const outputDir = join(__dirname, 'output');
    try {
      await mkdir(outputDir, { recursive: true });

      const filePath = join(outputDir, 'logo.svg');
      const stream = createWriteStream(filePath);

      stream.write(svgContent, (err) => {
        if (err) {
          console.error('Error writing SVG file:', err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    } catch (error) {
      console.error('Error creating output directory:', error);
    }
  }
}

module.exports = SvgGenerator;
