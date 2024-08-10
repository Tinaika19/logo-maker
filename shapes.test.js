// lib/shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Triangle renders correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Square renders correctly', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="green" />');
  });
});
