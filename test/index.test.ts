import {expect} from 'chai';

import router from '../src/routes/sample';
import {agent as request} from 'supertest';

describe("Index Test", () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
});

it('should GET /sample/ping', async function () {
  const res = await request(router).get('/ping');
  expect(res.status).to.equal(200);
  // expect(res.body).not.to.be.empty;
  // expect(res.body.data).not.to.be.empty;
  // expect(res.body.data).to.be.an("array");
  // expect(res.body.error).to.be.empty;
});

it('should GET /sample/api/items', async function () {
  const res = await request(router).get('/api/items').query({q: 'auto'});
  expect(res.status).to.equal(200);
  expect(res).not.to.be.empty;
  expect(res.body).to.be.an("array");
});