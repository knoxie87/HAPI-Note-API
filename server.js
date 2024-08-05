const crud = require('./crud.js')
const Hapi = require('@hapi/hapi');
const port = process.env.PORT || 4000;



const init = async () => {

    const server = Hapi.server({
        port,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/Insert',
        handler: (request, h) => {
            const params = request.query
            crud.insertNote(query.subject,query.note)
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const params = request.query
            crud.retrieveNotes()
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