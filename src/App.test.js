// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RandomDataGen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RandomDataGen/i);
    expect(titleElement).toBeInTheDocument();
});
