//importing mongoose library
const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URL || '', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection