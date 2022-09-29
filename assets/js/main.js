console.log(nome, " chamando variável criada com var");

var nome = "Fiap";

escreve("Exemplo de função nominal");

function escreve(titulo){
   // alert(titulo)

}

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("César");

const mudaTitulo2 = function (novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo;
};

const relogio = () => {
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
};

setInterval(relogio, 1000)