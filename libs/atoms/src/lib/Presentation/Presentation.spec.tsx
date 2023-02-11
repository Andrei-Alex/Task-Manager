import { render } from '@testing-library/react';

import {Presentation, defaultPresentation} from '.';

describe('Presentation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Presentation presentation={defaultPresentation} />);
    expect(baseElement).toBeTruthy();
  });
});
