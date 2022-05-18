const connectDB = require('./db')
const express = require("express")
const app = express();

//Connecting to database
connectDB();

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(
        ['/api*'],
        createProxyMiddleware({
            target: 'http://localhost:4000',
        })
    );
};

//To enable the application to use JSON, we use a middleware
app.use(express.json())


//available routes
app.use("/api/auth", require('./routes/auth'))
app.use("/api/notes", require('./routes/notes'))

app.listen(4000, () => console.log(`app listening to port 4000`))