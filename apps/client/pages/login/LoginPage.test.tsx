import { render, screen } from '@testing-library/react';
import Login from '.';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routerMock } from '../../__MOCK__';

const path = 'Login';
it('renders LoginPage', () => {
  render(
    <RouterContext.Provider value={routerMock({ pathname: path })}>
      <Login />
    </RouterContext.Provider>
  );

  expect(screen.getByText(path));
});
