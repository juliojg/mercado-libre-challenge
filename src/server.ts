import http from 'http';
import express, { Router } from 'express';
import bodyParser from 'body-parser';
import logging from './Config/logging';
import config from './Config/config';
import endpoints from './Endpoints/endpoints';


const NAMESPACE = 'Server';
const router = express();

/** Logging the request **/

router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on(`finish`, () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}],
        STATUS - [${res.statusCode}]`);
    });

    next();
});

/** Parse the request **/

// Let send nested json to api
router.use(bodyParser.urlencoded({ extended: false }));
// Allows to not have to call json.parse/stringify on react-side
router.use(bodyParser.json());

/** Rules of our API **/

router.use((req, res, next) => {
    // Our request can come from everywhere (should be predefined)
    res.header('Access-Control-Allow-Origin', '*');
    // Our requests can have this headers
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Return the mehtods we accept on the API
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
});

/** Routes **/

router.use('/', endpoints);

/** Error Handling **/

router.use((req, res, next) => {
    const error = new Error('Not found');

    return res.status(404).json({
        message: error.message
    });
});

/** Create the server **/

const httpServer = http.createServer(router);
httpServer.listen(config.server.port,
    () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));
