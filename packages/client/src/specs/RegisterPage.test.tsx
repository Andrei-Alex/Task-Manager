import { render, screen } from '@testing-library/react';
import Register from '../pages/register';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routerMock } from '../__MOCK__';

const path = 'Register';
it('renders RegisterPage', () => {
  render(
    <RouterContext.Provider value={routerMock({ pathname: path })}>
      <Register />
    </RouterContext.Provider>
  );

  expect(screen.getByText(path));
});
