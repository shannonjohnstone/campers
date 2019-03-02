import React from 'react';
import Camper from './Camper';
import { render } from 'react-testing-library';

const mockCamper = {
  id: '5c79ef86802e9c20cc0d52ce',
  img: 'https://source.unsplash.com/random/32x32',
  username: 'Luann Ballard',
  avatar:
    'https://www.tinygraphs.com/squares/859?theme=bythepool&numcolors=1&size=32&fmt=svg',
  monthly_total: 55,
  total: 3543,
  rank: 1,
};

describe('Camper component', () => {
  test('Component snapshot', () => {
    const { container } = render(
      <table>
        <tbody>
          <Camper camper={mockCamper} />
        </tbody>
      </table>,
    );
    expect(container).toMatchSnapshot();
  });
});
