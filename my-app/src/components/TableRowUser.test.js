import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TableRowUser from './TableRowUser';

const userData = {
  id: 1,
  name: "Jisoo",
  username: "Jisoocakep",
  email: "jisoo@mail.com"
}

describe('UserList success', () => {
  test('renders UserList properly', async () => {
    render(
      <MemoryRouter>
        <TableRowUser user={userData} />
      </MemoryRouter>
    );

    // screen.debug()

    const row = screen.getByTestId('user-1')
    expect(row).toBeInTheDocument()
  });
})