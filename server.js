
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

posts=[
  {id:'45ml',title:'azer',contenu:'voila votre premier ligne '},
  {id:'5897',title:'ooma',contenu:'voila votre 2eme ligne '},
  {id:'879jjh',title:'gml',contenu:'voila votre 3eme ligne '},
  {id:'123',title:'lbs',contenu:'voila votre 4eme ligne '},
  ];
mongoose
  .connect(
"mongodb+srv://arijtest:00000000@cluster0.m70gqkq.mongodb.net/post?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });
//GET
app.get('/post',(req, res) => {
  res.json(posts)
});
//GET BY ID
app.get('/post/:id',(req, res) => {
  posts.findById(req.params.id)
      .then(i => res.json(i))
      .catch(err => res.status(400).json('Error: ' + err));
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
