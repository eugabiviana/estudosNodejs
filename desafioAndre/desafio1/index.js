const { request, response } = require("express");
const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.listen(3001, function(){
    console.log('API funcionando')
});

//rota da API de usuários
app.get('/users', async function (req, res) {
  
  try {
    const { data, request } = await axios.get('http://localhost:3000/users'); //rota do db usado na API | o método await só pode ser usado em uma função async e é o mesmo que o optional do Java.
    console.log(`O método é ${request.method}.`); //mostra o tipo de método usado na função.
    return res.json(data) //retorna o db no body

  } catch (error) {
    console.error(error);
  }
})

app.get('/posts', async function (req, res) {
  
  try {
    const { data, request } = await axios.get('http://localhost:3000/posts'); //rota do db usado na API | o método await só pode ser usado em uma função async e é o mesmo que o optional do Java.
    console.log(`O método é ${request.method}.`); //mostra o tipo de método usado na função.
    return res.json({data}) //retorna o db no body

  } catch (error) {
    console.error(error);
  }
})