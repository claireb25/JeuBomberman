const blocLargeur = document.getElementById('bomberMan').offsetWidth;
const blocHauteur = document.getElementById('bomberMan').offsetHeight;
const cadre = document.getElementById('fenetre');

var monster = document.getElementsByClassName("monstre");

    monster[0].style.top = 1*blocHauteur + "px";
    monster[0].style.left = 1*blocLargeur + "px";

    monster[1].style.top = 10*blocHauteur + "px";
    monster[1].style.left = 10*blocLargeur + "px";

    monster[2].style.top = 1*blocHauteur + "px";
    monster[2].style.left = 10*blocLargeur + "px";

    monster[3].style.top = 10*blocHauteur + "px";
    monster[3].style.left = 1*blocLargeur + "px";

var monsterAlive = monster.length;


var carte = [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,3,0,0,0,1],
    [1,0,0,0,0,0,0,3,0,0,0,1],
    [1,0,0,1,0,0,0,3,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,3,3,3,3,0,1],
    [1,0,0,0,0,3,3,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,3,0,1,0,0,1],
    [1,0,0,0,0,0,3,3,3,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
];



function afficherCarte()
{
    var x = 0;
    var y = 0;
    var carreSol;
    var carreMur;
    var carreMurDestr = Array();

    for (x=0; x<12; x++){
        for (y=0; y<12; y++){
            if (carte[y][x] == 0){
                carreSol = document.createElement("div");
                carreSol.setAttribute("class","sol");
                cadre.appendChild(carreSol);
                carreSol.style.top = y*blocHauteur + 'px';
                carreSol.style.left = x*blocLargeur + 'px';
            }
            else if (carte[y][x] == 1){
                carreMur = document.createElement("div");
                carreMur.setAttribute("class","mur");
                cadre.appendChild(carreMur);
                carreMur.style.top = y*blocHauteur + 'px';
                carreMur.style.left = x*blocLargeur + 'px';
            }
            else if (carte[y][x] == 3)
            {
                carreMurDestr = document.createElement("div");
                carreMurDestr.setAttribute("id","murDestr");
                cadre.appendChild(carreMurDestr);
                carreMurDestr.style.top = y*blocHauteur + 'px';
                carreMurDestr.style.left = x*blocLargeur + 'px';
            }           
        }   
    }
}

afficherCarte();

var hero = document.getElementById('bomberMan');
var hauteurHero = hero.offsetTop;
var posHeroVer = hauteurHero/blocHauteur;

var largeurHero = hero.offsetLeft;
var posHeroHor = largeurHero/blocLargeur;

function alerte(){
    document.getElementById('monsterVictory').play(); 
    message = document.createElement('p');
    message.setAttribute("id","message");
    message.innerHTML = "Hero is dead";
    cadre.appendChild(message);
}

document.addEventListener('keydown', function moveHero(event){
    var i = 0;
    if (event.keyCode == 38)/*haut*/{
        if (carte[posHeroVer-1][posHeroHor] == 0){
            posHeroVer -= 1;
            hero.style.top = posHeroVer*blocHauteur + 'px';
            for (i = monster.length-1; i >= 0; i--){ 
                if (monster[i]){
                    if (posHeroVer == monster[i].offsetTop/blocHauteur && posHeroHor == monster[i].offsetLeft/blocLargeur){
                        cadre.removeChild(monster[i]);
                        hero.style.backgroundColor = "red";
                        setTimeout (alerte,2000);
                    }
                }
            }
        }
    }
        
    else if (event.keyCode == 39)/*droite*/{
        if (carte[posHeroVer][posHeroHor+1] == 0){
            posHeroHor +=1;
            hero.style.left = posHeroHor*blocLargeur + 'px';

            for (i = monster.length-1; i >= 0; i--){  
                if (monster[i]){ 
                    if (posHeroVer == monster[i].offsetTop/blocHauteur && posHeroHor == monster[i].offsetLeft/blocLargeur){
                        cadre.removeChild(monster[i]);
                        hero.style.backgroundColor = "red";
                        monster[i].style.zIndex = 2000;
                        setTimeout (alerte,1000);
                    }
                }
            }
        }
    }
    else if (event.keyCode == 40)/*bas*/{
        if (carte[posHeroVer+1][posHeroHor] == 0){
            posHeroVer +=1;
            hero.style.top = posHeroVer*blocHauteur + 'px';

            for (i = monster.length-1; i >= 0; i--){ 
                if (monster[i]){
                    if (posHeroVer == monster[i].offsetTop/blocHauteur && posHeroHor == monster[i].offsetLeft/blocLargeur){
                        cadre.removeChild(monster[i]);
                        hero.style.backgroundColor = "red";
                        setTimeout (alerte,1000);
                    }
                }
            }
        }
    }
    else if (event.keyCode == 37)/*gauche*/{
        if (carte[posHeroVer][posHeroHor-1] == 0){
            posHeroHor -=1;
            hero.style.left = posHeroHor*blocLargeur + 'px';

            for (i = monster.length-1; i >= 0; i--){
                if (monster[i]){ 
                    if (posHeroVer == monster[i].offsetTop/blocHauteur && posHeroHor == monster[i].offsetLeft/blocLargeur){
                        cadre.removeChild(monster[i]);
                        hero.style.backgroundColor = "red";
                        setTimeout (alerte,1000);
                    }
                }
            }
        }
    }
});



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
    document.getElementById('tictac').play();
}  



function bombBoom(){
    var y = bomb.offsetTop/blocHauteur;
    var x = bomb.offsetLeft/blocLargeur;
    var murDestr = document.getElementById("murDestr");
    var j = 0;
    bomb.style.backgroundImage= "url('media/boom.png')";
    document.getElementById('bombSound').play(); 
    
    if (carte[y-1][x]==0){
        degatsCollateraux[0] =document.createElement("div");
        degatsCollateraux[0].classList.add("explosionCol");
        degatsCollateraux[0].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[0].style.left = x*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[0]);   
        
    }
    else if (carte[y-1][x]==3){          
        carte[y-1][x]=0;
        degatsCollateraux[0] =document.createElement("div");
        degatsCollateraux[0].classList.add("explosionCol");
        degatsCollateraux[0].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[0].style.left = x*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[0]); 
        afficherCarte();     
   }

    if (carte[y-1][x+1]==0){
        degatsCollateraux[1] =document.createElement("div");
        degatsCollateraux[1].classList.add("explosionCol");
        degatsCollateraux[1].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[1].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[1]);
        
    }
    else if (carte[y-1][x+1]==3){
        carte[y-1][x+1]=0;
        degatsCollateraux[1] =document.createElement("div");
        degatsCollateraux[1].classList.add("explosionCol");
        degatsCollateraux[1].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[1].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[1]);
        afficherCarte();    
    }

    if (carte[y][x+1]==0){
        degatsCollateraux[2] =document.createElement("div");
        degatsCollateraux[2].classList.add("explosionCol");
        degatsCollateraux[2].style.top = (y)*blocHauteur+ 'px';
        degatsCollateraux[2].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[2]);
        
    }
    else if (carte[y][x+1]==3){
        carte[y][x+1]=0;
        degatsCollateraux[2] =document.createElement("div");
        degatsCollateraux[2].classList.add("explosionCol");
        degatsCollateraux[2].style.top = (y)*blocHauteur+ 'px';
        degatsCollateraux[2].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[2]);        
        afficherCarte();    
    }

    if (carte[y+1][x+1]==0){
        degatsCollateraux[3] =document.createElement("div");
        degatsCollateraux[3].classList.add("explosionCol");
        degatsCollateraux[3].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[3].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[3]);    
    }
    else if (carte[y+1][x+1]==3){
        carte[y+1][x+1]=0;
        degatsCollateraux[3] =document.createElement("div");
        degatsCollateraux[3].classList.add("explosionCol");
        degatsCollateraux[3].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[3].style.left = (x+1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[3]);
        afficherCarte();    
    }

    if (carte[y+1][x]==0){
        degatsCollateraux[4] =document.createElement("div");
        degatsCollateraux[4].classList.add("explosionCol");
        degatsCollateraux[4].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[4].style.left = (x)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[4]);
        
    }
    else if (carte[y+1][x]==3){
        carte[y+1][x]=0;
        degatsCollateraux[4] =document.createElement("div");
        degatsCollateraux[4].classList.add("explosionCol");
        degatsCollateraux[4].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[4].style.left = (x)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[4]);
        
        afficherCarte();    
    }

    if (carte[y+1][x-1]==0){
        degatsCollateraux[5] =document.createElement("div");
        degatsCollateraux[5].classList.add("explosionCol");
        degatsCollateraux[5].style.top = (y+1)*blocHauteur+ 'px';
        degatsCollateraux[5].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[5]);
        
    }
    else if (carte[y+1][x-1]==3){
        carte[y+1][x-1]=0;
        degatsCollateraux[5] =document.createElement("div");
    degatsCollateraux[5].classList.add("explosionCol");
    degatsCollateraux[5].style.top = (y+1)*blocHauteur+ 'px';
    degatsCollateraux[5].style.left = (x-1)*blocLargeur+ 'px';
    cadre.appendChild(degatsCollateraux[5]);
        afficherCarte();  
    }

    if (carte[y][x-1]==0){
        degatsCollateraux[6] =document.createElement("div");
        degatsCollateraux[6].classList.add("explosionCol");
        degatsCollateraux[6].style.top = (y)*blocHauteur+ 'px';
        degatsCollateraux[6].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[6]);
        
    }
    else if (carte[y][x-1]==3){
        carte[y][x-1]=0;
        degatsCollateraux[6] =document.createElement("div");
        degatsCollateraux[6].classList.add("explosionCol");
        degatsCollateraux[6].style.top = (y)*blocHauteur+ 'px';
        degatsCollateraux[6].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[6]);
        afficherCarte();
    }

    if (carte[y-1][x-1]==0){
        degatsCollateraux[7] =document.createElement("div");
        degatsCollateraux[7].classList.add("explosionCol");
        degatsCollateraux[7].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[7].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[7]);
    }
    else if (carte[y-1][x-1]==3){
        carte[y-1][x-1]=0;
        degatsCollateraux[7] =document.createElement("div");
        degatsCollateraux[7].classList.add("explosionCol");
        degatsCollateraux[7].style.top = (y-1)*blocHauteur+ 'px';
        degatsCollateraux[7].style.left = (x-1)*blocLargeur+ 'px';
        cadre.appendChild(degatsCollateraux[7]);
        afficherCarte();
     }
    
    if (hero.offsetTop == bomb.offsetTop && hero.offsetLeft == bomb.offsetLeft){
        message = document.createElement('p');
        message.setAttribute("id","message");
        message.innerHTML = "You lose";
        cadre.appendChild(message); 
    }


    for (j = monster.length-1; j >= 0; j--){
        if (monster[j]){
            if (monster[j].offsetTop == bomb.offsetTop && monster[j].offsetLeft == bomb.offsetLeft){ 
                cadre.removeChild(monster[j]);
                afficherCarte();
                monsterAlive--;
                
                if (monsterAlive === 0){
                    message = document.createElement('p');
                    message.setAttribute("id","message");
                    message.innerHTML = "You win";
                    cadre.appendChild(message);   
                }
            }
        }
    }   

    for (var i = degatsCollateraux.length-1; i >= 0; i--){
        if (hero.offsetTop == degatsCollateraux[i].offsetTop && hero.offsetLeft == degatsCollateraux[i].offsetLeft){
           
            message = document.createElement('p');
            message.setAttribute("id","message");
            message.innerHTML = "You lose";
            cadre.appendChild(message);
        }
        for (j = monster.length-1; j >= 0; j--){
            if (monster[j] && degatsCollateraux[i]){
                if (monster[j].offsetTop == degatsCollateraux[i].offsetTop && monster[j].offsetLeft == degatsCollateraux[i].offsetLeft){
                    cadre.removeChild(monster[j]);
                    afficherCarte();                   
                    monsterAlive--;

                    if (monsterAlive === 0){
                        message = document.createElement('p');
                        message.setAttribute("id","message");
                        message.innerHTML = "You win";
                        cadre.appendChild(message);     
                    }
                }
            }  
        }
    }
 }
   
 

function bombdisparition(){
    bomb.style.display = "none";    
    bombAutorisation = 0;
}



function degatsCollaterauxDisparition(){
    var degatsCollaterauxdisparition = document.getElementsByClassName('explosionCol');
  
    for (var i = degatsCollaterauxdisparition.length-1; i >= 0; i--)
    {
        if (degatsCollaterauxdisparition[i]){
            cadre.removeChild(degatsCollaterauxdisparition[i]);
        }
    } 
}
    

    
function monsterMovement (mob)
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

var monsterTimer = Array(); 

monsterTimer[0] = setInterval(function() { monsterMovement(monster[0]) }, 1000);
if (monster[0]==undefined){  
    clearInterval(monsterTimer[0]); 
}

monsterTimer[1] = setInterval(function() { monsterMovement(monster[1]) }, 1000); 
if (monster[1]==undefined){
    clearInterval(monsterTimer[1]);
}

monsterTimer[2] = setInterval(function() { monsterMovement(monster[2]) }, 1000);
if (monster[2]==undefined){
    clearInterval(monsterTimer[2]);
}

monsterTimer[3] = setInterval(function() { monsterMovement(monster[3]) }, 1000);
if (monster[3]==undefined){
    clearInterval(monsterTimer[3]);
}