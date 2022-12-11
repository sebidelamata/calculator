const calculator = require('./calculator.js')

describe('addition', () => {
  test('two nums works', () => {
    expect(calculator.addition(6,1)).toBe(7);
  });
  test('rejects non-string args', () => {
    expect(() => { calculator.addition(4, "oopsies"); }).toThrow(TypeError);
  });
});

describe('subtraction', () => {
  test('two nums works', () => {
    expect(calculator.subtraction(6,1)).toBe(5);
  });
  test('rejects non-string args', () => {
    expect(() => { calculator.subtraction(4, "oopsies"); }).toThrow(TypeError);
  });
});

describe('multiplication', () => {
  test('two nums works', () => {
    expect(calculator.multiplication(6,1)).toBe(6);
  });
  test('rejects non-string args', () => {
    expect(() => { calculator.multiplication(4, "oopsies"); }).toThrow(TypeError);
  });
});

describe('division', () => {
  test('two nums works', () => {
    expect(calculator.division(6,1)).toBe(6);
  });
  test('rejects non-string args', () => {
    expect(() => { calculator.division(4, "oopsies"); }).toThrow(TypeError);
  });
});

describe('operate', () => {
  test('two nums works', () => {
    expect(calculator.operate(6,1, calculator.addition)).toBe(7);
  });
  test('rejects non-string args', () => {
    expect(() => { calculator.operate(4, "oopsies", calculator.subtraction); }).toThrow(TypeError);
  });
});