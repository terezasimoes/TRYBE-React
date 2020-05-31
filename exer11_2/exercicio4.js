// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. 
const retornaCaixaAlta = (str) => str.toUpperCase();

// A segunda deve também receber uma string e retornar só a primeira letra. 
const retornaPrimLetra = (str) => str.charAt(0);

// A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. 
const juntaStr1eStr2 = (str1, str2) => str1.concat(str2);

module.exports = {
    retornaCaixaAlta,
    retornaPrimLetra,
    juntaStr1eStr2,
};

// Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
//  Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
//   A terceira deve receber três strings e concatená-las.