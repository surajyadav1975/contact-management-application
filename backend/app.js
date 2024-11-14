const express =require('express')
const connectdb = require('./config/mongoose')
const dotenv=require('dotenv')
const contactrouter=require('./routes/contactrouter.js')
const cors=require('cors');

dotenv.config();
connectdb();

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/contacts',contactrouter)

app.listen(3000);
