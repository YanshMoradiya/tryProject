import express from 'express';
import 'dotenv/config'


const app = express();

app.get('/', (req, res) => {
    res.send('app is available')
});

app.get('/srk', (req, res) => {
    res.send('SHREE RAM KRISHNA...');
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});