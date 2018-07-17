'use strict';

const ResponseRender = require(global.config.path.utils + "response-render");
const locale = require(global.config.path.locales + "locale");

const errorHandler = function(error, request, response, next) {

    if (response.headersSent) return next(error);

    if (response.statusCode === 404) {

        error = {
            //message: "Route not found",
            message: locale.get('ROUTE_NOT_FOUND'),
            route: request.originalUrl,
            method: request.method
        };

    } else {

        response.statusCode = 500;

    }

    /*
    response.status(response.statusCode).send({
        "result": "error",
        "error": {
            message: ( typeof error["message"] === "string" ? error.message : error ),
            stack: (error.stack ? error.stack.split("\n") : "No stack info")
        }
    });
    */

    response.outputError = {
        code: ( typeof error["code"] === "number" ? error.code : null ),
        message: ( typeof error["message"] === "string" ? error.message : error ),
        stack: (error.stack ? error.stack.split("\n") : null)
    };
    if (response.outputError.stack === null) delete response.outputError.stack;
    return ResponseRender.responseError(response);

};

module.exports = errorHandler;