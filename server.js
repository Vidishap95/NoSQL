const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// setting environment variables
const PORT = process.env.PORT || 3001;
const app = express();

// use middlewares to parse incoming data
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

//use routes defined in routes.js
app.use(routes);

//connect to mongodb database and start server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port${PORT}!`);
    });
});