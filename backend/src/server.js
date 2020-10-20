const express = require('express');
const cors = require('cors');

const routes = require('./routes');

class App {

    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(cors());
    }

    routes() {
        this.express.use('/api', routes);
    }

}

module.exports = new App().express;