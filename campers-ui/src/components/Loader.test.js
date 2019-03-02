import React from 'react';
import Loader from './Loader';
import { render } from 'react-testing-library';

describe('Loader', () => {
  test('mounted', () => {
    const { queryByTestId } = render(<Loader isLoading={true} />);
    expect(queryByTestId('loader')).toBeTruthy();
  });
});
