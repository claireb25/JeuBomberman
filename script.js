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
var posHeroVer = hauteurHero/blocHauteur;

var largeurHero = hero.offsetLeft;
var posHeroHor = largeurHero/blocLargeur;

document.addEventListener('keydown', function moveHero(event){
        if (event.keyCode == 38)/*haut*/{
            if (carte[posHeroVer-1][posHeroHor] == 0){
                posHeroVer -= 1;
                hero.style.top = posHeroVer*blocHauteur + 'px'; 
            }
        }
        if (event.keyCode == 39)/*droite*/{
            if (carte[posHeroVer][posHeroHor+1] == 0){
                posHeroHor +=1;
                hero.style.left = posHeroHor*blocLargeur + 'px';
            }
        }
        if (event.keyCode == 40)/*bas*/{
            if (carte[posHeroVer+1][posHeroHor] == 0){
                posHeroVer +=1;
                hero.style.top = posHeroVer*blocHauteur + 'px';
            }
        }
        if (event.keyCode == 37)/*gauche*/{
            if (carte[posHeroVer][posHeroHor-1] == 0){
                posHeroHor -=1;
                hero.style.left = posHeroHor*blocLargeur + 'px';
            }
        }
})

/*Fin partie Claire*/



/*Debut partie Nicolas**/

/*var bomb = document.getElementById('bomb');*/
var bomb;
var bombAutorisation = 0; 
var degatsCollateraux = Array();



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
    bomb.style.top = posHeroVer*blocHauteur+ 'px';
    bomb.style.left = posHeroHor*blocLargeur+ 'px';
    cadre.appendChild(bomb);
}  

function bombBoom(){
    var y = bomb.offsetTop/blocHauteur;
    var x = bomb.offsetLeft/blocLargeur;
    var t = 0;
    bomb.style.backgroundImage= "url('media/boom.png')";
    
    if (carte[y-1][x]==0){
        degatsCollateraux[0] =document.createElement("div");
        degatsCollateraux[0].classList.add("explosionCol");
        degatsCollateraux[0].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[0].style.left = x*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[0]);
        
        
    }
    if (carte[y-1][x+1]==0){
        degatsCollateraux[1] =document.createElement("div");
        degatsCollateraux[1].classList.add("explosionCol");
        degatsCollateraux[1].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[1].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[1]);
        
    }
    if (carte[y][x+1]==0){
        degatsCollateraux[2] =document.createElement("div");
        degatsCollateraux[2].classList.add("explosionCol");
        degatsCollateraux[2].style.top = (y)*blocHauteur+ 'px';
        degatsCollateraux[2].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[2]);
        
    }
    if (carte[y+1][x+1]==0){
        degatsCollateraux[3] =document.createElement("div");
        degatsCollateraux[3].classList.add("explosionCol");
        degatsCollateraux[3].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[3].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[3]);
        
    }
    if (carte[y+1][x]==0){
        degatsCollateraux[4] =document.createElement("div");
        degatsCollateraux[4].classList.add("explosionCol");
        degatsCollateraux[4].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[4].style.left = (x)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[4]);
        
    }
    if (carte[y+1][x-1]==0){
        degatsCollateraux[5] =document.createElement("div");
        degatsCollateraux[5].classList.add("explosionCol");
        degatsCollateraux[5].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[5].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[5]);
        
    }
    if (carte[y][x-1]==0){
        degatsCollateraux[6] =document.createElement("div");
        degatsCollateraux[6].classList.add("explosionCol");
        degatsCollateraux[6].style.top = (y)*blocHauteur+ 'px';
        degatsCollateraux[6].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[6]);
        
    }
    if (carte[y-1][x-1]==0){
        degatsCollateraux[7] =document.createElement("div");
        degatsCollateraux[7].classList.add("explosionCol");
        degatsCollateraux[7].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[7].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[7]);
    }
    
    if (mob.offsetTop == bomb.offsetTop && mob.offsetLeft == bomb.offsetLeft){
        clearInterval(monsterTimer);
        mob.style.display = "none";
        message = document.createElement('p');
        message.setAttribute("id","message");
        message.innerHTML = "You win";
        cadre.appendChild(message);
        
        console.log(document.getElementById('message'));
    }

    for (var i = 0; i<8; i++){
        if (mob.offsetTop == degatsCollateraux[i].offsetTop && mob.offsetLeft == degatsCollateraux[i].offsetLeft){
        clearInterval(monsterTimer);
        mob.style.display = "none";
        message = document.createElement('p');
        message.setAttribute("id","message");
        message.innerHTML = "You win !<br> (les bourreaux d'aujourd'hui sont les victimes de demain)";
        cadre.appendChild(message);
        console.log(document.getElementById('message'));
        }
    }

    if (hero.offsetTop == bomb.offsetTop && hero.offsetLeft == bomb.offsetLeft){
        clearInterval(monsterTimer);
        mob.style.display = "none";
        message = document.createElement('p');
        message.setAttribute("id","message");
        message.innerHTML = "You lose";
        cadre.appendChild(message);
        
        console.log(document.getElementById('message'));
    }

    for (var i = 0; i<8; i++){
        if (hero.offsetTop == degatsCollateraux[i].offsetTop && hero.offsetLeft == degatsCollateraux[i].offsetLeft){
        clearInterval(monsterTimer);
        mob.style.display = "none";
        message = document.createElement('p');
        message.setAttribute("id","message");
        message.innerHTML = "You lose";
        cadre.appendChild(message);
        console.log(document.getElementById('message'));
        }
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
    var explosion = document.getElementsByClassName("explosionCol");
    
    
 
    switch (randomMouvement){
        case 0:
            if (carte[y - 1][x] == 0)
            { mob.style.top = (y-1)*blocHauteur + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;
            
        case 1:
            if (carte[y + 1][x] == 0)
            { mob.style.top = (y+1)*blocHauteur + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;

        case 2:
            if (carte[y][x-1] == 0)
            { mob.style.left = (x-1)*blocLargeur + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;

        case 3:
            if (carte[y][x+1] == 0)
            { mob.style.left = (x+1)*blocLargeur + "px"; }
            else { randomMouvement = Math.floor(Math.random() * Math.floor(max)); }
        break;
    }    
}
    
var monsterTimer = setInterval(monsterMovement, 1000);





/* Fin partie Tom */
