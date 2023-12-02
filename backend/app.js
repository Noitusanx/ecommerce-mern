const express = require('express');
const app = express();
const path = require('path')
// !cors digunakan apabila react dan server berada di di alamat yang berbeda misal React di localhost:3000 dan server di localhost:8000
const cors = require('cors');
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/img', express.static(path.join(__dirname, './public/img')))

const db = require('./app/models')
db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result)=>{
        console.log('Database connected! ')
    }).catch((err)=>{
        console.log('Cannot connect to database', err);
        process.exit();
    })

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Mern Shop!"
    })
});

require('./app/routes/product.route')(app);
require('./app/routes/order.route')(app);


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});
