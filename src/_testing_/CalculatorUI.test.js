import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorUI from '../components/CalculatorUI';

describe('Calculator', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<CalculatorUI />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Adds correctly based on input', () => {
    render(<CalculatorUI />);
    const output = screen.getByTestId('calculator-output');
    expect(output.textContent).toBe('');

    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(addButton);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(equalsButton);
    expect(output.textContent).toBe('12');
  });

  test('Subtracts correctly based on input', () => {
    render(<CalculatorUI />);
    const output = screen.getByTestId('calculator-output');
    expect(output.textContent).toBe('');

    const minusButton = screen.getByText('-');
    const equalsButton = screen.getByText('=');

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(minusButton);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(equalsButton);
    expect(output.textContent).toBe('6');
  });

  test('Multiplies correctly based on input', () => {
    render(<CalculatorUI />);
    const output = screen.getByTestId('calculator-output');
    expect(output.textContent).toBe('');

    const multiplyButton = screen.getByText('x');
    const equalsButton = screen.getByText('=');

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(multiplyButton);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(equalsButton);
    expect(output.textContent).toBe('27');
  });

  test('Divides correctly based on input', () => {
    render(<CalculatorUI />);
    const output = screen.getByTestId('calculator-output');
    expect(output.textContent).toBe('');

    const addButton = screen.getByText('÷');
    const equalsButton = screen.getByText('=');

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(addButton);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(equalsButton);
    expect(output.textContent).toBe('3');
  });

  test('Performs Modulus Calculation correctly based on input', () => {
    render(<CalculatorUI />);
    const output = screen.getByTestId('calculator-output');
    expect(output.textContent).toBe('');

    const addButton = screen.getByText('%');
    const equalsButton = screen.getByText('=');

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(addButton);
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(equalsButton);
    expect(output.textContent).toBe('3');
  });
});
