'use strict';

const Hapi = require('@hapi/hapi');
const port = process.env.PORT || 4000;

const init = async () => {

    const server = Hapi.server({
        port,
        host: '0.0.0.0'
    });

    
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();