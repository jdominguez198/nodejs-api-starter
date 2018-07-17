// Get configuration
global.__root_dir = __dirname + '/';

const app = require(global.__root_dir + 'src/app');

let server = null;
if (global.config.https) {

    const sslOptions = {
        key: app.fs.readFileSync("ssl/server.key"),
        cert: app.fs.readFileSync("ssl/server.crt"),
        ca: app.fs.readFileSync("ssl/server.csr"),
        requestCert: false,
        rejectUnauthorized: false
    };

    const http = require("spdy");
    server = http.createServer(sslOptions, app);

} else {

    server = app;

}

if (server !== null) {
    server.listen(global.config.port, function () {
        console.log('Initializing server...');
        console.log('Environment mode: ' + (process.env.NODE_ENV === 'dev' ? 'Development' : 'Production'));
        console.log('URL: ' + (global.config.https ? 'https://' : 'http://') +
            global.config.external_url[process.env.NODE_ENV] + ':' + global.config.port);
    });
} else {
    console.log('problem with server intilization');
}
