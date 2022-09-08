const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: `mongodb+srv://RJSanti:7OcGcHrglTqetvaV@securestorageinc.gqlyqk5.mongodb.net/?retryWrites=true&w=majority`
    },
    server: {
        host: 'localhost',
        port: 1337
    }
};

export default config;
