import { render } from '@testing-library/react';
import Color from "./Color"
import {primary} from '.';

describe('Color', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Color color={primary} />);
    expect(baseElement).toBeTruthy();
  });
});
