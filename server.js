const crud = require('./crud.js')
const Hapi = require('@hapi/hapi');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;


const init = async () => {

    const server = Hapi.server({
        port,
        host
    });

    // Route to insert note and return all notes
    server.route({
        method: 'POST',
        path: '/Insert',
        handler: async (request) => {
            const params = request.payload
            let result = crud.insertNote(params.subject,params.note)
            return result;
        }
    });

    // Route to retrieve all notes
    server.route({
        method: 'GET',
        path: '/',
        handler: async () => {
           let result = crud.retrieveNotes()
           return result;
        }
    });

    // Route to retrieve specific note
    server.route({
        method: 'GET',
        path: '/GetNote/{subject}',
        handler: async (request) => {
            let result = crud.retrieveSpecificNote(request.params.subject)
            return result;
        }
    });

    server.route({
        method: 'DELETE',
        path: '/DeleteNote/{subject}',
        handler: async (request) => {
            let result = crud.deleteNote(request.params.subject)
            return result;
        }
    })

    await server.start();
    console.log('Server running on ', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();