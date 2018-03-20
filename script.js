const blocLargeur = document.getElementById('bomberMan').offsetWidth;
const blocHauteur = document.getElementById('bomberMan').offsetHeight;
var cadre;
var carte = [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

function afficherCarte()
{
    var x = 0;
    var y = 0;
    var carreSol;
    var carreMur;
    cadre = document.getElementById('fenetre');

    for (x=0; x<12; x++){
        for (y=0; y<12; y++){
        if (carte[y][x] == 0)
        {
            carreSol = document.createElement("div");
            carreSol.setAttribute("class","sol");
            cadre.appendChild(carreSol);
            carreSol.style.top = y*blocHauteur + 'px';
            carreSol.style.left = x*blocLargeur + 'px';
        }
        else if (carte[y][x] == 1)
        {
            carreMur = document.createElement("div");
            carreMur.setAttribute("class","mur");
            cadre.appendChild(carreMur);
            carreMur.style.top = y*blocHauteur + 'px';
            carreMur.style.left = x*blocLargeur + 'px';
        }      
        }   
    }
}

afficherCarte();

/* Debut partie Claire */
var hero = document.getElementById('bomberMan');
var hauteurHero = hero.offsetTop;
var posHeroVer = hauteurHero/40;
console.log(posHeroVer);

var largeurHero = hero.offsetLeft;
var posHeroHor = largeurHero/40;
console.log(posHeroHor);

document.addEventListener('keydown', function moveHero(event){
        if (event.keyCode == 38)/*haut*/{
            if (carte[posHeroVer-1][posHeroHor] == 0){
                posHeroVer -= 1;
                hero.style.top = posHeroVer*40 + 'px'; 
                console.log(hero.style.top);
            }
        }
        if (event.keyCode == 39)/*droite*/{
            if (carte[posHeroVer][posHeroHor+1] == 0){
                posHeroHor +=1;
                hero.style.left = posHeroHor*40 + 'px';
            }
        }
        if (event.keyCode == 40)/*bas*/{
            if (carte[posHeroVer+1][posHeroHor] == 0){
                posHeroVer +=1;
                hero.style.top = posHeroVer*40 + 'px';
            }
        }
        if (event.keyCode == 37)/*gauche*/{
            if (carte[posHeroVer][posHeroHor-1] == 0){
                posHeroHor -=1;
                hero.style.left = posHeroHor*40 + 'px';
            }
        }
})

/*Fin partie Claire*/



/*Debut partie Nicolas**/

/*var bomb = document.getElementById('bomb');*/
var bomb;
var bombAutorisation = 0; 
var degatsCollateraux;
var monsterDisparition;



document.addEventListener('keydown', function bomb(evenement){
    if (evenement.keyCode == 32){
        if (bombAutorisation == 0){
            bombAutorisation = 1; 
            bombset();
            setTimeout(bombBoom, 2000);
            setTimeout(bombdisparition, 3000);
            setTimeout (degatsCollaterauxDisparition, 3000);
        }
}});

function bombset () { 
    bomb = document.createElement("div");   
    bomb.classList.add("bomb");
    bomb.style.top = posHeroVer*40+ 'px';
    bomb.style.left = posHeroHor*40+ 'px';
    cadre.appendChild(bomb);
}  
function bombBoom(){
    var y = bomb.offsetTop/blocHauteur;
    var x = bomb.offsetLeft/blocLargeur;
    bomb.style.backgroundImage= "url('media/boom.png')";
    
    if (carte[y-1][x]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y-1)*40+ 'px';
        degatsCollateraux.style.left = x*40+ 'px';
        cadre.appendChild(degatsCollateraux);
        
        
    }
    if (carte[y-1][x+1]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y-1)*40+ 'px';
        degatsCollateraux.style.left = (x+1)*40+ 'px';
        cadre.appendChild(degatsCollateraux);
        
    }
    if (carte[y][x+1]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y)*40+ 'px';
        degatsCollateraux.style.left = (x+1)*40+ 'px';
        cadre.appendChild(degatsCollateraux);
        
    }
    if (carte[y+1][x+1]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y+1)*40+ 'px';
        degatsCollateraux.style.left = (x+1)*40+ 'px';
        cadre.appendChild(degatsCollateraux);
        
    }
    if (carte[y+1][x]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y+1)*40+ 'px';
        degatsCollateraux.style.left = (x)*40+ 'px';
        cadre.appendChild(degatsCollateraux);
        
    }
    if (carte[y+1][x-1]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y+1)*40+ 'px';
        degatsCollateraux.style.left = (x-1)*40+ 'px';
        cadre.appendChild(degatsCollateraux);
        
    }
    if (carte[y][x-1]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y)*40+ 'px';
        degatsCollateraux.style.left = (x-1)*40+ 'px';
        cadre.appendChild(degatsCollateraux);
        
    }
    if (carte[y-1][x-1]==0){
        degatsCollateraux =document.createElement("div");
        degatsCollateraux.classList.add("explosionCol");
        degatsCollateraux.style.top = (y-1)*40+ 'px';
        degatsCollateraux.style.left = (x-1)*40+ 'px';
        cadre.appendChild(degatsCollateraux);
}
    if (mob.offsetTop == bomb.offsetTop || mob.offsetTop == degatsCollateraux.offsetTop){

        clearInterval(monsterTimer);
        mob.style.display = "none";
        alert("YOU WIN !");
       
    }
 }
    
function bombdisparition(){
    bomb.style.display = "none";    
    bombAutorisation = 0;
}

function degatsCollaterauxDisparition(){
    var degatsCollaterauxdisparition = document.getElementsByClassName('explosionCol');
    var i = 0;
    while (degatsCollaterauxdisparition[i])
    {
        console.log(i);
        degatsCollaterauxdisparition[i].style.display = "none";
        i++;
    }
     
        }
    



/*Fin partie Nicolas*/

 

/*** Debut partie Tom */
var mob = document.getElementById("monstre");

    mob.style.top = 5*blocHauteur + "px";
    mob.style.left = 5*blocLargeur + "px";
    
function monsterMovement ()
{
    var max = 4;
    var y = mob.offsetTop/blocHauteur;
    var x = mob.offsetLeft/blocLargeur;
    var randomMouvement = Math.floor(Math.random() * Math.floor(max));
    
 
    switch (randomMouvement){
        case 0:
            if (carte[y - 1][x] == 0)
            { mob.style.top = (y-1)*40 + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;
            
        case 1:
            if (carte[y + 1][x] == 0)
            { mob.style.top = (y+1)*40 + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;

        case 2:
            if (carte[y][x-1] == 0)
            { mob.style.left = (x-1)*40 + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;

        case 3:
            if (carte[y][x+1] == 0)
            { mob.style.left = (x+1)*40 + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;
    }    
}
    
var monsterTimer = setInterval(monsterMovement, 1000);


var monsterTimer = setInterval(monsterMovement, 1000);



/* Fin partie Tom */
