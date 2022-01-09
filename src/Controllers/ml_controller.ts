import { Request, Response, NextFunction } from 'express';
import logging from '../Config/logging';
import axios from 'axios';
import { Product } from '../Components/Product/Product';
import { responseToProducts, responseToProductDetail } from "../Utils/productUtils"

const NAMESPACE = 'ML Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `Sample health check route called.`);
  return res.status(200).json({
    message: 'pong'
  });
};

const getItems = (req: Request, res: Response, next: NextFunction) => {
  const queryParam = req.query.q;
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${queryParam}`;

  logging.info(NAMESPACE, `Searching for articles with keyword: ${queryParam}`);

  axios.get(url)
    .then(response => {
      const resp: any = response;
      res.status(200).json(responseToProducts(resp['data']));
    })
    .catch(e => {
      console.log(e);
    })
};

export const getItemDetailById = (req: Request, res: Response, next: NextFunction) => {
  const param = req.params.id;
  const url = `https://api.mercadolibre.com/items/${param}`;

  logging.info(NAMESPACE, `Searching item with id: ${param}`);

  axios.get(url + '/description')
  .then(response => {
    const resp: any = response;
    const description = resp['data']['plain_text'];
    axios.get(url)
    .then(response => {
      const resp: any = response;
      res.status(200).json(responseToProductDetail(resp['data'], description));
    })
    .catch(e => {
      console.log(e);
    })
  })
};

export default  { sampleHealthCheck, getItems, getItemDetailById };