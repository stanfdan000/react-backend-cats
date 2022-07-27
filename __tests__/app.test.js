const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');



describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
     
    const expected = [{ 
      id: '4',
      issidekick: false,
      lives: 1,
      name: 'stimpy',
      type: 'Manx',
      url: 'https://www.placekitten.com',
      year: 1990,
    }, 
    { 
      id: '2',
      issidekick: false,
      lives: 7,
      name: 'Garfield',
      type: 'Orange Tabby',
      url: 'https://www.placekitten.com',
      year: 1978,
    }
    ];
      
    
    console.log(res.body);
    expect(res.body[1]).toEqual({ 
      id: '2',
      issidekick: false,
      lives: 7,
      name: 'Garfield',
      type: 'Orange Tabby',
      url: 'https://placekitten.com',
      year: 1978,
    });
  });





  it('/cats/:id should return cat detail', async () => {
    const res = await request(app).get('/cats/1');
    const felix = {
      id: '1',
      issidekick: false,
      lives: 3,
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://placekitten.com',
      year: 1892,
    };
    expect(res.body).toEqual(felix);
  });

  afterAll(() => {
    pool.end();
  });
});
