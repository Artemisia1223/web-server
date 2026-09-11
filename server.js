import express from 'express';

const app = express();
const PORT = 3000;

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/', (req, res) => {
  res.send('Hello, web!');
});

app.get('/projects', (req, res) => {
  const tag = req.query.tag;
  // filter `projects` here, based on your decision above
  if (!tag){
    return res.json([]);
  }
  res.json(projects.filter(project => project.tag === tag))

});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

