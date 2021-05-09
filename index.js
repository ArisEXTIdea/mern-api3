import express from 'express';

const app = express();

app.use(() => {
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');

})

app.listen(4000);
