import {expect} from 'chai';

import router from '../src/Endpoints/endpoints';
import {agent as request} from 'supertest';

describe("Index Test", () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
});

it('should GET /ping', async function () {
  const res = await request(router).get('/ping');
  expect(res.status).to.equal(200);
});

it('should GET /api/items', async function () {
  const res = await request(router).get('/api/items').query({q: 'auto'});
  expect(res.status).to.equal(200);
  expect(res).not.to.be.empty;
  expect(res.body).to.be.an("object");
});