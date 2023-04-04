
// --------------------------------------------------------------------------------
/// <summary>
/// App.test.js
/// ReactApp
/// created by Mehrdad Soleimanimajd on 26.03.2023
/// </summary>
/// <created>ʆϒʅ, 26.03.2023</created>
/// <changed>ʆϒʅ, 28.03.2023</changed>
// --------------------------------------------------------------------------------


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('clicks hello button', () => {
  render(<App />);
  const testLink = screen.getByText("hello Button");
  expect(testLink.click()).click;
});

test('logs hello button found by text', () => {
  render(<App />);
  const testLink2 = screen.getByText("hello Button");
  console.log(testLink2);
});
