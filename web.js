const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');

const app = express();

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'dist', 'index.html'));
});

// EJS
app.set('views', `${__dirname}/dist`);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Middleware
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(morgan('combined')); // combined or dev

const port = process.env.PORT || 8001; // cafe24 port 8001

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
