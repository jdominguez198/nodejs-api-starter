'use strict';

const notFoundHandler = function(request, response, next) {

    if (!response.outputData) {

        response.status(404);
        return next({error: 404});

    }

    return next();

};

module.exports = notFoundHandler;

