const mongoose = require("mongoose");
// const Mongo_Url = "mongodb+srv://Kavin_14:1421Kavin@godevs.cfgexon.mongodb.net/Abdullah?retryWrites=true&w=majority";
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL || Mongo_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
