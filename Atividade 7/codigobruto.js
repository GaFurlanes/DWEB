function jogar(escolhaUsuario){
    let opcoes =["pedra", "papel", "tesoura"];
    let escolhaComputador = opcoes[Math.floor(Math.random() *3)];
    let resultado;

    if (escolhaUsuario == escolhaComputador){
        resultado = "Empatou!";
}
else if(
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra")||
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura")
){
    resultado = "Você Ganhou!";
 }   else {
        resultado = "Você Perdeu";
    }
    document.getElementById("resultado").innerHTML =
    "<br>" + resultado;
}