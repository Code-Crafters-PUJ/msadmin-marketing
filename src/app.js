const express = require('express');
const mockData = require('./mockData');

const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

app.get('/api/active-users', (req, res) => {
  res.json({ percentage: mockData.emails.visualizacion });
});

app.get('/api/users-landing', (req, res) => {
  res.json({ users: mockData.landingPage.users });
});

app.get('/api/formas-de-enterarse', (req, res) => {
  res.json({ formasDeEnterarse: mockData.formasDeEnterarse });
});

app.get('/api/history-users', (req, res) => {
  res.json({ history: mockData.historialDudas });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
