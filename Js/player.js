let playerX = 401; //variável que define a posição horizontal padrão do jogador.
const player = document.getElementById("player"); //pega a imagem em html do jogador. 

window.addEventListener( "keydown", (e) => { //Checa se há teclas pressionadas.
let key = e.key; //variável que repressenta as teclas.

if(key == "ArrowRight") { 
moverDireita()
}

else if(key == "ArrowLeft"){ 
moverEsquerda() 
}

})

function moverDireita(){

if(playerX == 290) { 
playerX = 401; 
player.style.left = playerX + "px"
}

}

function moverEsquerda(){
    if(playerX == 401){

playerX = 290;
player.style.left = playerX + "px";

    }
}

//======================= Controles touch ===============================
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");

//addEventListener para "ficar ouvindo" o clique/toque
leftbtn.addEventListener("pointerdown", () => {
    moverEsquerda(); 
});

rightbtn.addEventListener("pointerdown", () => {
    moverDireita();  
});