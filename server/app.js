const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config()

const app = express();

const authRoutes = require('./routes/authRoutes')

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use('/auth', authRoutes);

const port = process.env.PORT || 8082

const startServer = async () => {
    try {
        connectDB();
        app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
        app.get('/', (req, res) => res.send("hello backend!"));
    } catch (error) {
        console.log(error)
    }
}

startServer();
