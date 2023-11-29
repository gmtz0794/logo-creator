const inquirer = require('inquirer');
const { createWriteStream } = require('fs');
const { join } = require('path');
const { Circle, Triangle, Square } = require('./shapes');
const { createSvgDocument } = require('./document');
const SvgGenerator = require('./svgGenerator');

class CLI {
  async promptUser() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);

    return userInput;
  }

  async generateSvg(text, textColor, shapeType, shapeColor) {
    const svgGenerator = new SvgGenerator(text, textColor, shapeType, shapeColor);
    await svgGenerator.generateSvg();
  }

  async run() {
    try {
      const userInput = await this.promptUser();

      await this.generateSvg(
        userInput.text,
        userInput.textColor,
        userInput.shape,
        userInput.shapeColor
      );
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

module.exports = CLI;
