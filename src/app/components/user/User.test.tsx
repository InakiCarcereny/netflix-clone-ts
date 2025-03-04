import { fireEvent, render, screen } from '@testing-library/react';
import { User } from '@/components/user/User';

describe('<User />', () => {
  it('should render the component', () => {
    render(<User />);
    const element = screen.getByText(/Close Session/i);
    expect(element).toBeInTheDocument();
  });

  it('show the search menu on click', () => {
    render(<User />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const input = screen.queryByRole('textbox');
    expect(input).not.toBeInTheDocument();

    fireEvent.click(button);

    const inputAfterClick = screen.queryByRole('textbox');
    expect(inputAfterClick).toBeInTheDocument();
  });
});
