const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');
// Create an array of questions for user input
const questions = [
  {
    type: "list",
    message: "What type of shape would you like?",
    name: "shape",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    message: "Choose up to any 3 characters you'd like?",
    name: "text",
  },
  {
    type: "input",
    message: "What color would you like the shape to be?",
    name: "shapecolor",
  },
  {
    type: "input",
    message: "What color would you like the text to be?",
    name: "textcolor",
  },
];

// Create a function to write the SVG file
function createNewFile(folder, fileName, data) {
  const filePath = path.join(__dirname, folder, `${fileName}.svg`);
  fs.writeFile(filePath, generateSVG(data), (err) => {
    if (err) {
      console.error(`Error writing to ${fileName}.svg:`, err);
    } else {
      console.log(`${fileName}.svg has been successfully generated in the ${folder} folder.`);
    }
  });
}

// Create a function to generate the SVG content
function generateSVG(data) {
  let shapeContent;

  switch (data.shape) {
    case "circle":
     return new Circle(data.shapecolor, data.textcolor, data.text).render();
    case "square":
      return new Square(data.shapecolor, data.textcolor, data.text).render();
    case "triangle":
      return new Triangle(data.shapecolor, data.textcolor, data.text).render();
     
    default:
      console.error("Invalid shape selected");
      return "";
  }

}

// Create a function to initialize the application
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      createNewFile("examples", "logo", answers);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to start the user prompt
init();