
// --------------------------------------------------------------------------------
/// <summary>
/// App.test.js
/// ReactApp
/// created by Mehrdad Soleimanimajd on 26.03.2023
/// </summary>
/// <created>ʆϒʅ, 26.03.2023</created>
/// <changed>ʆϒʅ, 27.03.2023</changed>
// --------------------------------------------------------------------------------


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
