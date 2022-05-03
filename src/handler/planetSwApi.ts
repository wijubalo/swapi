'use strict';

import {planetSwApiController} from "../controller";

module.exports.get = async (event) => {
    const result = await planetSwApiController.getAll();
    return {
        statusCode: 200,
        body: JSON.stringify(result, null,2),
    };
};

module.exports.find = async (event) => {
    const {id} = event.pathParameters;
    const result = await planetSwApiController.get(id);
    return {
        statusCode: 200,
        body: JSON.stringify(result, null,2),
    };
};