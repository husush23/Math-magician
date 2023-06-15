import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
