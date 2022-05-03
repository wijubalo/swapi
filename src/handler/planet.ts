'use strict';

import {planetaController} from "../controller";

module.exports.get = async (event) => {
    const result = await planetaController.getAll();
    return {
        statusCode: 200,
        body: JSON.stringify(result, null,2),
    };
};

module.exports.find = async (event) => {
    const {id} = event.pathParameters;
    const result = await planetaController.get(id);
    return {
        statusCode: 200,
        body: JSON.stringify(result, null,2),
    };
};

module.exports.add = async (event) => {
    console.log('body', event.body);
    const request = JSON.parse(event.body);
    const result = await planetaController.save(request);
    return {
        statusCode: 200,
        body: JSON.stringify(result, null,2),
    };
};