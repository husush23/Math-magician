import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorUI from '../components/CalculatorUI';

test('renders correctly', () => {
  const tree = renderer.create(<CalculatorUI />).toJSON();
  expect(tree).toMatchSnapshot();
})