import { render } from '@testing-library/react';
import { Footer } from '.';

it('renders footer', () => {
  const { container: footerContainer } = render(<Footer />);
  const footerEl = footerContainer.querySelector('footer');
  expect(footerEl).toBeInTheDocument();
});
