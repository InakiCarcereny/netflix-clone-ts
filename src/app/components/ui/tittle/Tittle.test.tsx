import { render, screen } from '@testing-library/react';
import { Tittle } from '@/components/ui/tittle';

describe('<Tittle />', () => {
  it('Renders the Tittle component', () => {
    render(<Tittle label='Topics' />);
    const tittle = screen.getByRole('heading', {
      level: 5,
    });
    expect(tittle).toBeInTheDocument();
  });
});
