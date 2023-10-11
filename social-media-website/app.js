import express from 'express';

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('/views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('/views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

//404
app.use((req, res) => {
  res.sendStatus(404).sendFile('/views/404.html', { root: __dirname });
});