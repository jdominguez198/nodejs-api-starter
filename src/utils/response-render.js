'use strict';

const responseSuccess = function (response) {

    if (response !== null) {

        return response.status(200).send({
            result: "success",
            data: (response.outputData ? response.outputData : [])
        });

    }

};

const responseError = function (response) {

    if (response !== null) {

        return response.status(response.statusCode).send({
            result: "error",
            data: (response.outputError ? response.outputError : "Unknown")
        });

    }

};

module.exports = {
    responseSuccess, responseError
};
