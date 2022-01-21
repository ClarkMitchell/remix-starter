import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello Component', () => {
  it('renders without crashing', () => {
    render(<Hello />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
