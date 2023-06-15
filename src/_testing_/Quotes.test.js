import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

test('renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
