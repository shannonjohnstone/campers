const mockData = require('../../../mock-data/campers.json');
const database = require('../../../database');
const campersRepository = require('../campers.repository');

describe('campers repository', () => {
  test('should findAll campers', () => {
    const campers = campersRepository(database);
    expect(campers.findAll()).toEqual(mockData.campers);
  });
  test('should throw and error', () => {
    expect(() => campersRepository()).toThrow(
      'campersRepository: database instance required',
    );
  });
});
