const express = require('express');
const app=express();
const port=2000;
const routes = require('./routes');
app.set('views', __dirname + '/views');
app.use('/assets', express.static(__dirname +'/public/assets'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(routes);
app.set('view engine', 'ejs');
app.listen(port, (error) => {
    if (error) {
        console.error(error);
        return process.exit(1);
    } else {
        console.log('Wb application running on port: ' + port)
    }
})
