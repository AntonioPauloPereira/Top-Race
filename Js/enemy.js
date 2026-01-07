const enemy = document.getElementById("enemy");
const borderTracks = document.getElementById("borderTracks")
const tracks = document.getElementById("tracks");
let time = 5;
let enemyY = -135;
enemy.style.animationDuration = time + "s";

function colisao() {
    const colisaoPlayer = player.getBoundingClientRect();
    const colisaoEnemy = enemy.getBoundingClientRect();
     

    const colidiu = !(
        colisaoPlayer.top > colisaoEnemy.bottom -55|| //frente         
        colisaoPlayer.bottom < colisaoEnemy.top +78|| //atrás+
        colisaoPlayer.left > colisaoEnemy.right -80|| //lado  
        colisaoPlayer.right < colisaoEnemy.left +80  //lado-   
    );
    
    if (colidiu) {
        console.log("bateu");
        enemy.style.animationPlayState = "paused"; 
        tracks.style.animationPlayState = "paused"
        borderTracks.style.animationPlayState = "paused"
        return; 
    }
    
    requestAnimationFrame(colisao);
}
requestAnimationFrame(colisao)
