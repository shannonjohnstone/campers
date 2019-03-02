const mockData = require('../../../mock-data/campers.json');
const database = require('../../../database');
const campersRepository = require('../campers.repository');
const campersService = require('../campers.service');

describe('campers controllers', () => {
  test('should return all campers', async () => {
    const service = campersService(campersRepository(database));
    const campers = await service.getCampers();
    expect(campers).toEqual(mockData.campers);
  });
  test('should return sorted campers', async () => {
    const service = campersService(campersRepository(database));
    const sortedCampers = service.sortHighToLow(
      await service.getCampers(),
      'total',
    );

    // subset of array for testing
    const subset = sortedCampers.slice(0, 10);
    expect(subset).toEqual([
      {
        avatar:
          'https://www.tinygraphs.com/squares/193?theme=heatwave&numcolors=7&size=32&fmt=svg',
        id: '5c79f0601849fbad3eb24110',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 54,
        total: 9888,
        username: 'Harvey Parks',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/283?theme=duskfalling&numcolors=3&size=32&fmt=svg',
        id: '5c79f06074fff10a333c4892',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 44,
        total: 9750,
        username: 'Miranda Martin',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/75?theme=heatwave&numcolors=10&size=32&fmt=svg',
        id: '5c79f0607758a3021941fc90',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 31,
        total: 9747,
        username: 'Tillman Oconnor',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/1000?theme=heatwave&numcolors=6&size=32&fmt=svg',
        id: '5c79ef86db6c48ba5cd6574a',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 71,
        total: 9719,
        username: 'Fitzgerald Le',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/172?theme=duskfalling&numcolors=5&size=32&fmt=svg',
        id: '5c79ef8671a9fa568978880e',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 14,
        total: 9707,
        username: 'Durham Sanchez',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/169?theme=heatwave&numcolors=10&size=32&fmt=svg',
        id: '5c79f060281d419b3d9512d8',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 57,
        total: 9701,
        username: 'Rose Singleton',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/272?theme=duskfalling&numcolors=3&size=32&fmt=svg',
        id: '5c79f06073d7eb7cda7d3a00',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 92,
        total: 9696,
        username: 'Page Mcneil',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/872?theme=duskfalling&numcolors=1&size=32&fmt=svg',
        id: '5c79ef868b89bfc65898977d',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 3,
        total: 9691,
        username: 'Padilla Carr',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/526?theme=heatwave&numcolors=6&size=32&fmt=svg',
        id: '5c79f0609180d896e6c5253c',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 69,
        total: 9664,
        username: 'Goodman Lewis',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/916?theme=duskfalling&numcolors=5&size=32&fmt=svg',
        id: '5c79f06001fddb2d4a3a30dc',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 18,
        total: 9620,
        username: 'Landry Vaughn',
      },
    ]);
  });
  test('should return ranked campers', async () => {
    const service = campersService(campersRepository(database));
    const sortedCampers = service.rankCampers(await service.getCampers());

    // subset of array for testing
    const subset = sortedCampers.slice(0, 10);
    expect(subset).toEqual([
      {
        avatar:
          'https://www.tinygraphs.com/squares/859?theme=bythepool&numcolors=1&size=32&fmt=svg',
        id: '5c79ef86802e9c20cc0d52ce',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 55,
        rank: 1,
        total: 3543,
        username: 'Luann Ballard',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/595?theme=duskfalling&numcolors=7&size=32&fmt=svg',
        id: '5c79ef86dd148bb0a5dd664c',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 96,
        rank: 2,
        total: 457,
        username: 'Lawrence Chaney',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/719?theme=duskfalling&numcolors=8&size=32&fmt=svg',
        id: '5c79ef86f83f6c1c809b689c',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 36,
        rank: 3,
        total: 5519,
        username: 'Margret Pugh',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/775?theme=duskfalling&numcolors=3&size=32&fmt=svg',
        id: '5c79ef86704354ba33525772',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 21,
        rank: 4,
        total: 4853,
        username: 'Ramsey Haley',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/254?theme=heatwave&numcolors=6&size=32&fmt=svg',
        id: '5c79ef86b0df9ccd07ab5890',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 91,
        rank: 5,
        total: 7656,
        username: 'Alicia Cruz',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/171?theme=heatwave&numcolors=8&size=32&fmt=svg',
        id: '5c79ef8677394a01fe8956b2',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 50,
        rank: 6,
        total: 8077,
        username: 'Dixon Salas',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/437?theme=duskfalling&numcolors=2&size=32&fmt=svg',
        id: '5c79ef86f32ec6ffb7c218c5',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 20,
        rank: 7,
        total: 7779,
        username: 'Rodriguez Hendrix',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/870?theme=duskfalling&numcolors=9&size=32&fmt=svg',
        id: '5c79ef861b857daed6378aeb',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 91,
        rank: 8,
        total: 2123,
        username: 'Mable Hayden',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/577?theme=heatwave&numcolors=7&size=32&fmt=svg',
        id: '5c79ef86c182c0ced3162c7a',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 43,
        rank: 9,
        total: 9174,
        username: 'Patel Mcneil',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/370?theme=heatwave&numcolors=7&size=32&fmt=svg',
        id: '5c79ef868bd6ef0efb3feb96',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 84,
        rank: 10,
        total: 3202,
        username: 'Sheppard Durham',
      },
    ]);
  });
  test('should return limited campers', async () => {
    const service = campersService(campersRepository(database));
    const campers = service.limitCampers(await service.getCampers(), 2);
    expect(campers).toEqual([
      {
        avatar:
          'https://www.tinygraphs.com/squares/859?theme=bythepool&numcolors=1&size=32&fmt=svg',
        id: '5c79ef86802e9c20cc0d52ce',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 55,
        total: 3543,
        username: 'Luann Ballard',
      },
      {
        avatar:
          'https://www.tinygraphs.com/squares/595?theme=duskfalling&numcolors=7&size=32&fmt=svg',
        id: '5c79ef86dd148bb0a5dd664c',
        img: 'https://source.unsplash.com/random/32x32',
        monthly_total: 96,
        total: 457,
        username: 'Lawrence Chaney',
      },
    ]);
  });
  test('should throw and error', () => {
    expect(() => campersService()).toThrow(
      'campersServices: repository required',
    );
  });
});
