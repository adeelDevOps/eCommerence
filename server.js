const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');
const uploadRoute = require('./routes/uploadRoute');

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(bodyParser.json());
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use('/uploads', express.static('C:/Users/pc/Desktop/New folder/backend/uploads'));
// app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.send("default route" )
  // res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
