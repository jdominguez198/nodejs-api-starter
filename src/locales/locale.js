'use strict';

const fs = require('fs');
const locales = {
    es: JSON.parse(fs.readFileSync(__dirname + '/es.json', 'utf8')),
    en: JSON.parse(fs.readFileSync(__dirname + '/en.json', 'utf8')),
};

global.lc = {};
Object.keys(locales.es).forEach(function(key) {
   let keyCode = "_" + key;
   global.lc[keyCode] = key;
});

const get = (key, lang) => {

    if (lang === undefined || lang === null ||
        typeof locales[lang] == "undefined" || locales[lang] === undefined || locales[lang] === null) {
            lang = global.config.locale;
    }

    let locale = locales[lang];

    if (typeof locale[key] == "undefined" || locale[key] === undefined || locale[key] === null) {

        if (typeof locales[lang][key] == "undefined" ||
            locales[lang][key] === undefined || locales[lang][key] === null) {

            throw new Error("Locale key missing");

        }

        return locales[lang][key];

    }

    return locale[key];

};

const setLanguage = function(request, response, next) {

    if (request.headers.locale) {

        global.localeCode = request.headers.locale;

    }

    return next();

};

module.exports = {
    setLanguage: setLanguage,
    get: get
};