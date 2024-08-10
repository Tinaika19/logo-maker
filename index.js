// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: input => input.length <= 3 || 'Please enter up to 3 characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):'
  }
];

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;

  switch (shape) {
    case 'circle':
      shapeElement = new Circle();
      break;
    case 'triangle':
      shapeElement = new Triangle();
      break;
    case 'square':
      shapeElement = new Square();
      break;
  }

  shapeElement.setColor(shapeColor);

  return `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
  `;
}

async function main() {
    try {
      const answers = await inquirer.prompt(questions);
      const svgContent = generateSVG(answers);
      const filePath = path.join(__dirname, 'logo.svg');
  
      fs.writeFileSync(filePath, svgContent);
  
      console.log('Generated logo.svg');
      console.log(`Open this file in your browser: file://${filePath.replace(/\\/g, '/')}`);
    } catch (error) {
      console.error('Error generating SVG:', error);
    }
  }
  
  main();