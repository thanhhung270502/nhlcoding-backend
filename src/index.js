const express = require('express');
const cors = require('cors');
const route = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: 'http://localhost:3001',
        credentials: true,
    }),
);

// Routes
route(app);

app.listen(PORT, () => {
    console.log('Server on port', PORT);
});
