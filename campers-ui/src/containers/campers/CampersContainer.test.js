import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import CampersContainer from './CampersContainer';

describe('CampersContainer component', () => {
  let testElement;

  beforeEach(() => {
    testElement = render(<CampersContainer />);
  });

  afterEach(() => {
    testElement = null;
  });

  test('button state', () => {
    const toggleBtn = testElement.queryByTestId('toggleCampers');
    expect(toggleBtn.textContent).toBe('Show Monthly');
    fireEvent.click(toggleBtn);
    expect(toggleBtn.textContent).toBe('Show All Time');
  });

  test('loading state', () => {
    const toggleBtn = testElement.queryByTestId('toggleCampers');
    const loader = testElement.queryByTestId('loader');
    fireEvent.click(toggleBtn);
    expect(loader).toBeTruthy();
  });
});
