const inquirer = require('inquirer');
const fs = require('fs/promises');
const { Circle, Triangle, Square } = require('./lib/shape');

async function promptUser() {
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
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput;
}

async function run() {
  try {
    const userInput = await promptUser();

    let shape;
    switch (userInput.shape) {
      case 'Circle':
        shape = new Circle(userInput.text.length, userInput.shapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(userInput.text.length, userInput.shapeColor);
        break;
      case 'Square':
        shape = new Square(userInput.text.length, userInput.shapeColor);
        break;
      default:
        console.error('Invalid shape selection');
        return;
    }

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.generateSVG()}
        <!-- Add text based on userInput.text and userInput.textColor -->
      </svg>
    `;

    await fs.writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

run();