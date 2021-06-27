require('dotenv').config();
const app = require('./app');
const mongoose = require("mongoose");

const port = process.env.PORT ?? 5500;

app.listen(port, () => {
  console.log(`Server started on port ${port}.....`);

  mongoose.connect('mongodb://localhost:27017/weather', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, () => {
    console.log('Connection to weather database is successful.');
  });
})
