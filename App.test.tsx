import { render, screen } from '@testing-library/react-native';

import App from './App';

it('renders the reader network greeting', () => {
  render(<App />);

  expect(
    screen.getByText('Welcome to Readet, the future social network for readers.'),
  ).toBeTruthy();
});
