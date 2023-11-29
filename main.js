const express = require('express');
const app = express();
const user = require('./routes/user');
const boards = require('./routes/boards');

app.get('/', (req, res) => {
    res.send('Welcome to the root')
});
app.use('/user', user);
app.use('/boards', boards);

app.listen(3000, function (){
    console.log('listening on a port', 3000);
})