const database = require('../../../database');
const campersController = require('../campers.controller');
const campersService = require('../campers.service');
const campersRepository = require('../campers.repository');

const mockRequest = data => ({ ...data });
const mockResponse = () => {
  const res = {};
  return {
    json: result => {
      return jest.fn().mockReturnValue(result);
    },
    status: () => jest.fn().mockReturnValue(res),
  };
};

const service = campersService(campersRepository(database));
const controller = campersController(service);

describe('campers controllers', () => {
  describe('getHighestTotal', () => {
    test('should call .json, return all campers rated by overall total', async () => {
      const req = mockRequest({ query: { limit: 5 } });
      const res = mockResponse();
      const result = await controller.getHighestTotal(req, res);

      expect(result()).toEqual([
        {
          avatar:
            'https://www.tinygraphs.com/squares/193?theme=heatwave&numcolors=7&size=32&fmt=svg',
          id: '5c79f0601849fbad3eb24110',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 54,
          rank: 1,
          total: 9888,
          username: 'Harvey Parks',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/283?theme=duskfalling&numcolors=3&size=32&fmt=svg',
          id: '5c79f06074fff10a333c4892',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 44,
          rank: 2,
          total: 9750,
          username: 'Miranda Martin',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/75?theme=heatwave&numcolors=10&size=32&fmt=svg',
          id: '5c79f0607758a3021941fc90',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 31,
          rank: 3,
          total: 9747,
          username: 'Tillman Oconnor',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/1000?theme=heatwave&numcolors=6&size=32&fmt=svg',
          id: '5c79ef86db6c48ba5cd6574a',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 71,
          rank: 4,
          total: 9719,
          username: 'Fitzgerald Le',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/172?theme=duskfalling&numcolors=5&size=32&fmt=svg',
          id: '5c79ef8671a9fa568978880e',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 14,
          rank: 5,
          total: 9707,
          username: 'Durham Sanchez',
        },
      ]);
    });
  });
  describe('getHighestTotalMonthly', () => {
    test('should return all campers rated by monthly total', async () => {
      const req = mockRequest({ query: { limit: 5 } });
      const res = mockResponse();
      const result = await controller.getHighestTotalMonthly(req, res);

      expect(result()).toEqual([
        {
          avatar:
            'https://www.tinygraphs.com/squares/898?theme=bythepool&numcolors=9&size=32&fmt=svg',
          id: '5c79ef867cd1a9d4b7bd25a1',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 100,
          rank: 1,
          total: 8064,
          username: 'Saunders Weeks',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/440?theme=duskfalling&numcolors=6&size=32&fmt=svg',
          id: '5c79ef867e2d9cbce2c5d7a9',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 99,
          rank: 2,
          total: 2301,
          username: 'Castro Moon',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/686?theme=duskfalling&numcolors=10&size=32&fmt=svg',
          id: '5c79f0602166e5579aeb7144',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 99,
          rank: 3,
          total: 803,
          username: 'Rasmussen Livingston',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/389?theme=heatwave&numcolors=4&size=32&fmt=svg',
          id: '5c79ef8635d965f16fd9e3ed',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 98,
          rank: 4,
          total: 8040,
          username: 'Kaufman Chang',
        },
        {
          avatar:
            'https://www.tinygraphs.com/squares/619?theme=duskfalling&numcolors=7&size=32&fmt=svg',
          id: '5c79f0604e01ea27e1cd8e68',
          img: 'https://source.unsplash.com/random/32x32',
          monthly_total: 98,
          rank: 5,
          total: 3910,
          username: 'Pearson Simon',
        },
      ]);
    });
  });
});
