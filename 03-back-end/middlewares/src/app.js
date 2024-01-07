const express = require('express');
const app = express();

const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
   return res.sendStatus(400);
  }
};



let nextId = 3;
const teams = [
  {id: 1, nome: "São Paulo Futebol Clube", sigla: "SPF"},
  {id: 2, nome: "Sociedade Esportiva Palmeiras", sigla: "PAL"},
]


app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.status(404);
  }
});

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId++;
  res.status(201).json(team);
})

app.put('/teams/:id', validateTeam ,(req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    return res.sendStatus(400);
  } 
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  } else {
    res.sendStatus(204);
  }
});

module.exports = app;