import express from 'express';

const app = express();
const server = app.listen(3000, () => {
    console.log('Started server on http://localhost:3000:${server.address().port}');});
});