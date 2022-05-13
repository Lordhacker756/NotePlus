const connectDB = require('./db')
const express = require("express")
const app = express();

//Connecting to database
connectDB();


//available routes
app.use("/api/auth", require('./routes/auth'))
app.use("/api/notes", require('./routes/notes'))

app.listen(4000, () => console.log(`app listening to port 4000`))