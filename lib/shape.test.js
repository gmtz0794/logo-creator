const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should calculate area correctly', () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
  });

});

describe('Triangle', () => {
  test('should calculate area correctly', () => {
    const triangle = new Triangle(4, 5);
    expect(triangle.calculateArea()).toBe(10);
  });

});

describe('Square', () => {
  test('should calculate area correctly', () => {
    const square = new Square(6);
    expect(square.calculateArea()).toBe(36);
  });

});