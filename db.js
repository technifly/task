const mongoose = require('mongoose');

const connected = async () => {
    await mongoose.connect(process.env.dbURL, { useNewUrlParser: true })
        .then(()=>console.log(`db connected`))
        .catch((err) => console.log(err));

};

module.exports = connected;
