const mockData = require('../../../mock-data/campers.json');
const database = require('../../../database');
const campersRepository = require('../campers.repository');
const campersService = require('../campers.service');

describe('campers controllers', () => {
  test('should return all campers', () => {
    const service = campersService(campersRepository(database));
    const campers = service.getCampers();
    expect(campers).toEqual(mockData.campers);
  });
  test('should throw and error', () => {
    expect(() => campersService()).toThrow(
      'campersServices: repository required',
    );
  });
});
