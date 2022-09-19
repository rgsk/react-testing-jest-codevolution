import { render, screen } from '@testing-library/react';
import TwoButtons from './TwoButtons';

describe('TwoButtons', () => {
  test.skip('selecting just by role button will fail the test because there are two buttons', () => {
    render(<TwoButtons />);
    const rahulButton = screen.getByRole('button');
    expect(rahulButton).toBeInTheDocument();
    // TestingLibraryElementError: Found multiple elements with the role "button"
  });

  test('buttons can be selected by role based on text inside them', () => {
    render(<TwoButtons />);
    // searched by text for button
    const rahulButton = screen.getByRole('button', { name: 'rahul' });
    expect(rahulButton).toBeInTheDocument();
    // searched by aria-label for button
    const mehakButton = screen.getByRole('button', { name: 'Mehak Gupta' });
    // not aria-label overrides text search, so {name: 'mehak'} won't work
    expect(mehakButton).toBeInTheDocument();
  });
});
