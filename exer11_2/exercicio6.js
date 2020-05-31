/*

Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. 
O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”. 
O segundo deve interpretar que a requisição falhou e ter como valor “request failed”. 
Crie todos os testes que achar necessário.

*/

function dogPictures() {
    return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response = response.json())
    .then(dadosEmJson => response.ok ? Promise.resolve(dadosEmJson) : Promise.reject(dadosEmJson));
    
}
module.exports = {dogPictures}

/*
    JSON
    {
    "message": "https://images.dog.ceo/breeds/malinois/n02105162_6459.jpg",
    "status": "success"
    }
    */