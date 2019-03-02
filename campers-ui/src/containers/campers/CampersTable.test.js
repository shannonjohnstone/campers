import React from 'react';
import CampersTable from './CampersTable';
import { render } from 'react-testing-library';

const mockCamper = [
  {
    id: '5c79ef86802e9c20cc0d52ce',
    img: 'https://source.unsplash.com/random/32x32',
    username: 'Luann Ballard',
    avatar:
      'https://www.tinygraphs.com/squares/859?theme=bythepool&numcolors=1&size=32&fmt=svg',
    monthly_total: 55,
    total: 3543,
    rank: 1,
  },
  {
    id: '5c79ef86dd148bb0a5dd664c',
    img: 'https://source.unsplash.com/random/32x32',
    username: 'Lawrence Chaney',
    avatar:
      'https://www.tinygraphs.com/squares/595?theme=duskfalling&numcolors=7&size=32&fmt=svg',
    monthly_total: 96,
    total: 457,
    rank: 2,
  },
];

describe('CampersTable component', () => {
  test('Component snapshot', () => {
    const { container } = render(<CampersTable camper={mockCamper} />);
    expect(container).toMatchSnapshot();
  });
});
