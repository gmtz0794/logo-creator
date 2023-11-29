const inquirer = require('inquirer');
const fs = require('fs/promises');
const { Circle, Triangle, Square } = require('./lib/shape');

async function run() {

  const circle = new Circle(radius, color);
  const triangle = new Triangle(sideLength, color);
  const square = new Square(sideLength, color);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${circle.generateSVG()}
      ${triangle.generateSVG()}
      ${square.generateSVG()}
    </svg>
  `;

  try {
    await fs.writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo.svg:', error);
  }
}

run();