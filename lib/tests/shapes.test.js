const Circle = require("../Circle");
const Triangle = require("../Triangle");
const Square = require("../Square");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const shapeColor = 'red';
    const textColor = 'blue';
    const text = 'aaa';
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="50" fill="${shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="36">${text}</text></svg>`
    const circle = new Circle(shapeColor, textColor, text);
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
describe("Triangle", () => {
  test("should render svg for a green triangle element", () => {
    const shapeColor = 'blue';
    const textColor = 'yellow';
    const text = 'err';
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><polygon points="100,0 0,200 200,200" fill="${shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="36">${text}</text></svg>`
    const triangle = new Triangle(shapeColor, textColor, text);
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
describe("Square", () => {
  test("should render svg for a green square element", () => {
    const shapeColor = 'red';
    const textColor = 'blue';
    const text = 'aaa';
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="36">${text}</text></svg>`
    const square = new Square(shapeColor, textColor, text);
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});


