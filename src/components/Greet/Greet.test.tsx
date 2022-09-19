import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    /*
    getBy.. class of queries return the matching node for a query, and throw a 
    descriptive error if no elements match or if more than one match is found
    */
    const textElement = screen.getByText('Hello Guest');
    expect(textElement).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet name="Rahul" />);
    const textElement = screen.getByText('Hello Rahul');
    expect(textElement).toBeInTheDocument();
  });
});
