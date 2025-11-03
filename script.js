const jogo = 'Mini Jogo de Perguntas';
let pontuacao = 0;

console.log("Bem-Vindo ao "+ jogo +"!");

alert("Bem-Vindo ao Mini Jogo de Perguntas!");

let iniciar = confirm("Quer começar o jogo?");
if(!iniciar){
    console.log("Usuário decidiu não jogar. Até a próxima!");
} else {
    function perguntar(pergunta, respostaCorreta){
    let resposta = prompt(pergunta);
    if(resposta.toLocaleLowerCase() === respostaCorreta.toLocaleLowerCase()) {
        console.log("Acertou!");
        pontuacao++;
    } else {
        console.log("Errou! A resposta correta era: "+respostaCorreta);
    }
}
    perguntar("Qual a capital do Brasil?", "Brasília");
    perguntar("Quantos dias tem uma semana?", "7");
    perguntar("Qual é a cor do céu em um dia claro?", "azul");
    perguntar("Qual é a cor favorita da helo?", "roxo" || "preto" || "vermelho");
    perguntar("Qual é o nome do irmão mais novo da helo?", "Arthur");
    perguntar("Qual é o jogo favorito da helo?", "Life is Strange");
    perguntar("Qual é o livro favorito da helo?", "Crime e Castigo");
    perguntar("Cite um dos 4 favoritos da helo no letterboxd", "Paris, Texas" || "Watching the detectives" || "Submarine" || "Eternal Sunshine of a Spotless Mind");

    console.log("Fim do jogo! Sua pontuação: "+ pontuacao);
}

(function() {
    console.log("Obrigada por jogar");
})();