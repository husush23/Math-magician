import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';


test('renders correctly', () => {
  const tree = renderer.create(
  <BrowserRouter>
    <Header />
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})