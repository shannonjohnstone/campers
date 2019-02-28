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
          id: '5c77cb80fbb87b7c261036e0',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Romero Puckett',
          monthly_total: 20,
          total: 9988,
        },
        {
          id: '5c77cb80ddb935bf3c616205',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Casey Sullivan',
          monthly_total: 85,
          total: 9967,
        },
        {
          id: '5c77cb802b721a3bbcf58e1d',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Armstrong Mcdonald',
          monthly_total: 45,
          total: 9853,
        },
        {
          id: '5c77cb80d72c27286a022c2b',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Pam Wooten',
          monthly_total: 10,
          total: 9737,
        },
        {
          id: '5c77cb80ccd2e72f45cd5311',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Kerri Britt',
          monthly_total: 71,
          total: 9666,
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
          id: '5c77cb801ef4949781491a15',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Freeman Walker',
          monthly_total: 100,
          total: 8341,
        },
        {
          id: '5c77cb80ac8be178d2e51367',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Ramirez Parker',
          monthly_total: 100,
          total: 5735,
        },
        {
          id: '5c77cb8051e98259c781aedc',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Burns Powers',
          monthly_total: 100,
          total: 179,
        },
        {
          id: '5c77cb80fca1efe1abc9d22f',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Audra Sparks',
          monthly_total: 99,
          total: 3130,
        },
        {
          id: '5c77cb80c4ba3e8fc8a754eb',
          img: 'https://source.unsplash.com/collection/888146/300x300',
          username: 'Patterson Edwards',
          monthly_total: 98,
          total: 4199,
        },
      ]);
    });
  });
});
