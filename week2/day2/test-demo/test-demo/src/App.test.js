import { render, screen } from '@testing-library/react';
import App from './App';

//use describe to create a test suite
describe('Testing the App Component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const learnReactLink = screen.getByText(/learn react/i);
    expect(learnReactLink).toBeInTheDocument();
  });

  test('renders save to reload text', () => {
    render(<App />);
    const saveToReloadText = screen.getByText(/save to reload/i);
    expect(saveToReloadText).toBeInTheDocument();
  });
});
