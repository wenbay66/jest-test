import { rest } from 'msw';

import username from './mockResponse/username';
import staff from './mockResponse/staff';

const url = 'http://localhost:9000';

export const handlers = [

  rest.post('/login', null),

  rest.get(`${url}/user`, (req, res, ctx) => {
    
    return res(
      ctx.status(200),
      ctx.json(username),
    )
  }),

  rest.get(`${url}/staff`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(staff),
    )
  }),
];