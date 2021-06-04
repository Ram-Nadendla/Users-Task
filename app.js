const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/users";
const app = express();


mongoose.connect(url,{useNewUrlParser : true})

const connection = mongoose.connection;
connection.on('open', ()  => {
    console.log('Database Connected')
});
app.use(express.json());
const userRoutes = require('./routes/UserRoutes');
app.use('/users',userRoutes);
app.listen(8500, () => {
    console.log('Server is running in the 8500')
})
