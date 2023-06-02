//importing mongoose library
const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URL || 'mongodb://127.0.0.1:27017/socialNetworkDB', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection