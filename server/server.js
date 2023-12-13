import express from 'express';
import fs from 'fs';
const app = express();
const port = 3300;

app.use(express.static('dist'));

app.get('/data.json', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    res.json(data);
} catch (error) {
  console.error('Error reading data.json:', error);

  res.status(500).send('Internal Server Error');
}
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});