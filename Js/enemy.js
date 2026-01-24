const enemy = document.getElementById("enemy");
const borderTracks = document.getElementById("borderTracks")
const tracks = document.getElementById("tracks");

//Tempo
let speedBase = 4
enemy.style.animationDuration = speedBase + "s";
let speedSpawn = speedBase*1000; 
let speedmin = 0.3

function updateSpeed(){
    let trueSpeed = speedBase - (score * 0.2);
    if(trueSpeed < speedmin){ trueSpeed = speedmin;}
    enemy.style.animationDuration = truespeed + "s"
}


//Lógica do inimigo
function colisao() {
    const colisaoPlayer = player.getBoundingClientRect();
    const colisaoEnemy = enemy.getBoundingClientRect();
     
//colisao
    const colidiu = !(
        colisaoPlayer.top > colisaoEnemy.bottom -55|| //frente         
        colisaoPlayer.bottom < colisaoEnemy.top +78|| //atrás+
        colisaoPlayer.left > colisaoEnemy.right -80|| //lado  
        colisaoPlayer.right < colisaoEnemy.left +80  //lado-   
        
    );
    
    if (colidiu) {
        vivo = false;
        console.log("bateu");
        enemy.style.animationPlayState = "paused"; 
        tracks.style.animationPlayState = "paused"
        borderTracks.style.animationPlayState = "paused"
        gameover();
        return; 
    
    }
    requestAnimationFrame(colisao);
}
requestAnimationFrame(colisao)

//Lógica de nascimento
setInterval(()=>{
    const seed = Math.floor(Math.random() * 7)
if      (seed <= 3 && vivo == true){enemy.style.left = 401 + "px"}
else if (seed >= 4 && vivo == true) {enemy.style.left = 290 + "px"}
console.log(enemy.offsetTop)
},speedSpawn)

//Score
let score = 0;
let anterior = enemy.offsetTop;
const scoreElement = document.getElementById("score") 

function updateScore() {
    const atual = enemy.offsetTop;

    // Detecta quando cruza o limite 
    if (atual >= 800 && anterior < 800) {
        score++;
        console.log(score);
        scoreElement.innerText = "Score: "+score;
    
    }

    anterior = atual; // Guarda valor anterior
    requestAnimationFrame(updateScore);
}

requestAnimationFrame(updateScore);

//Game over
function gameover(){
const overtext = document.getElementById("overtext")
overtext.innerText = "Game Over!"

const press = document.getElementById("press");
press.innerText = "Press [R] to restart"

    window.addEventListener( "keydown", (e)=>{
let key = e.key;
if(key == "R" || key == "r" || key == "ArrowRight"){
location.reload();
}

})

}
