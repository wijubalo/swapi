// 'use strict';
import axios from "axios";

const url = `${process.env.SWAPI_BASE_URL}/planets`;
module.exports.user = async (event) => {

    const result = await axios.get(url);
    console.log('result', result.data);
    return {
    statusCode: 200,
    body: JSON.stringify(result,
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.findUser = async (event) => {
  const name = event.pathParameters.name;
  return {
    statusCode: 200,
    body: JSON.stringify(
        {
          message: `¡Hola ${name}!`,
          // input: event,
        },
        null,
        2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
