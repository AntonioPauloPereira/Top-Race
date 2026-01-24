const enemy = document.getElementById("enemy");
const borderTracks = document.getElementById("borderTracks")
const tracks = document.getElementById("tracks");
let time = 5;
let enemyY = -135;
enemy.style.animationDuration = time + "s";

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
        return; 
    
    }
    requestAnimationFrame(colisao);
}
requestAnimationFrame(colisao)

//Lógica de nascimento
setInterval(()=>{
    const seed = Math.floor(Math.random() * 21)
if      (seed <= 10 && vivo == true){enemy.style.left = 401 + "px"}
else if (seed >= 11 && seed <= 20 && vivo == true) {enemy.style.left = 290 + "px"}
console.log(enemy.offsetTop)
},5000)

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
        scoreElement.textContent = score;
    }

    anterior = atual; // Guarda valor anterior
    requestAnimationFrame(updateScore);
}

requestAnimationFrame(updateScore);


