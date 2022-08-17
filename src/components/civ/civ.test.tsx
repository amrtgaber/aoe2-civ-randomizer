import { render } from '@testing-library/react';
import { Civ } from '.';

test('renders civ', () => {
  const { container: civContainer } = render(
    <Civ
      civ={{ civName: 'Aztecs', id: 1 }}
      isDrafted={false}
      isInPool={false}
    />
  );
  const civEl = civContainer.querySelector('.civ-container');
  expect(civEl).toBeInTheDocument();
});
