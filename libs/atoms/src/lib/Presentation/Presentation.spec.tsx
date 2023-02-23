import { render } from '@testing-library/react';
import Presentation from "./Presentation"
import {defaultPresentation} from '.';

describe('Presentation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Presentation presentation={defaultPresentation} />);
    expect(baseElement).toBeTruthy();
  });
});
