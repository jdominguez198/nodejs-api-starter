'use strict';

const responseHandler = function(request, response, next) {

    if (response.statusCode !== 200) return next();

    else {

        response.status(200).send({
            "result": "success",
            "data": (response.outputData ? response.outputData : [])
        });

    }

};

module.exports = responseHandler;