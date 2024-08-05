const crud = require('./crud.js')
const Hapi = require('@hapi/hapi');
const port = process.env.PORT || 4000;

const init = async () => {

    const server = Hapi.server({
        port,
        host: '0.0.0.0'
    });

    // Route to insert note and return all notes
    server.route({
        method: 'POST',
        path: '/Insert',
        handler: async (request) => {
            const params = request.payload
            let result = await crud.insertNote(params.subject,params.note)
            return result;
        }
    });

    // Route to retrieve all notes
    server.route({
        method: 'GET',
        path: '/',
        handler: async () => {
           let result = await crud.retrieveNotes()
           return result;
        }
    });

    await server.start();
    console.log('Server running on ', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();