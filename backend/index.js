const connectDB = require('./db')
const express = require("express")
const app = express();

//Connecting to database
connectDB();

//To enable the application to use JSON, we use a middleware
app.use(express.json())


//available routes
app.use("/api/auth", require('./routes/auth'))
app.use("/api/notes", require('./routes/notes'))

//Creating a dynamic port
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`app listening to port ${PORT}`))