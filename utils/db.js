const mongoose = require('mongoose');


//const DB_URL = 'mongodb://localhost:27017/wiki-de-minecraft';
const DB_URL = 'mongodb+srv://adrian:<password>@cluster0.walckix.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});