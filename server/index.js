require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 8080 
const connect = process.env.connect
const cors = require('cors')
const songRoutes = require('./routes/songs')


// Database Connection
mongoose.connect(connect,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(port, () => console.log(`db ga ulandi va ${port} ga ulanish hosil qilindi ...`)))
    .catch((error) => console.error(error))

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/songs", songRoutes)

