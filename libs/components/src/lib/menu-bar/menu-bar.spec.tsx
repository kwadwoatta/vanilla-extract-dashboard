import { render } from '@testing-library/react';

import MenuBar from './menu-bar';

describe('MenuBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuBar />);
    expect(baseElement).toBeTruthy();
  });
});
