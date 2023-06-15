const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

const port = process.env.PORT || 8082

const startServer = async () => {
    try {
        app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
        app.get('/', (req, res) => res.send("hello backend!"));
    } catch (error) {
        console.log(error)
    }
}

startServer();
