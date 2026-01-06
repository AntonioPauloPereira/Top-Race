playerX = 401; //variável que define a posição horizontal padrão do jogador.
const player = document.getElementById("player"); //pega a imagem em html do jogador. 

window.addEventListener( "keydown", (e) => { //Checa se há teclas pressionadas.
let key = e.key; //variável que repressenta as teclas.

if(key == "ArrowRight" && playerX == 290) { /*se a seta direita está precionada e playerX igual a 401, a posição horizontal do jogar será de 401. É de suma importância que uma das decisões
    possua o exato exato valor da posição inicial, assim evitando que o jogador saia pra fora da pista.*/
playerX = 401; 
player.style.left = playerX + "px" //muda a propriedade left do player e transforma o numero inteiro 401 em pixels.
}

else if(key == "ArrowLeft" && playerX == 401){ //se a seta esquerda é precionada e a mesmo tempo a variávele playerX é igual a 401, a posição horizontal do jogdor será de 290.
playerX = 290;
player.style.left = playerX + "px"; //muda a propriedade left do player e transforma o numero inteiro 401 em pixels.
}

})