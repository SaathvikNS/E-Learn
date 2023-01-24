const express = require('express');
const router = require('./routes/user');

const app = express();

const PORT = process.env.PORT || 8080

app.use(express.json());
app.use('/api/user', router )

app.use((err, res, req, next) => {
    console.error(err.stack)
    res.status(500).send('Something Broke!');
})


app.listen(8080, () => {
    console.log(`server running on port ${PORT}`)
})