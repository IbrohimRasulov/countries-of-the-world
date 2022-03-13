import { render, screen } from '@testing-library/react';
import Async from '../mocks/Async';

describe('Get Information from API', () => {
  test('Check if the list is not empty if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          name: {
            common: 'Egypt',
            official: 'Arab Republic of Egypt',
          },
          population: 102334403,
        },
      ],
    });

    render(<Async />);

    const listItems = await screen.findAllByRole('listitem');

    expect(listItems).not.toHaveLength(0);
  });
});
