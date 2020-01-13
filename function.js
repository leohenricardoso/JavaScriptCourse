
// Metedo simples para criar uma function
function imprimirSoma(a, b) {
    return a + b;
}

// Salvando uma function em uma variavel
const soma = (a, b) => {
    return a + b;
}

// Function salva em uma variavel retornando instantaneamente os dados passados como parametro
const subtracao = (a, b) => a- b;


// Validando resultados
console.log(imprimirSoma(10, 2));
console.log(soma(3, 3));
console.log(subtracao(5, 2));