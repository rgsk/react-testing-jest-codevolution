import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);
    /*
        All heading elements h1 to h6 have the role heading
    */
    const pageHeading = screen.getByRole('heading', {
      name: 'Job application form',
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole('heading', {
      name: 'Section 1',
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    /*
        getByRole Options
        name
        The accessible name is for simple cases equal to
        textContent or aria-label -> note of both are defined aria-label is given precedence
        also for input element -> label textContent and aria-label is considered
    */
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();

    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
});
