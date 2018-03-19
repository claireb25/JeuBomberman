const blocLargeur = 40;
const blocHauteur = 40;

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
    var cadre = document.getElementById('fenetre');

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
var hero = document.getElementById('bomberMan');
var hauteurHero = hero.offsetLeft;
console.log(hero.offsetLeft)
var largeurHero = hero.offsetTop;
console.log(hero.offsetTop)
var positionVerticale = largeurHero/40;
console.log(positionVerticale)
var positionHorizontale = hauteurHero/40;
console.log(positionHorizontale)
var bomb = document.getElementById('bomb');
document.addEventListener('keydown', function bombset(evenement){


      if (evenement.keyCode == 32){
          console.log("coucou")
    bomb.style.backgroundColor = "red";
    console.log(bomb.style.backgroundColor)
    bomb.style.top = positionVerticale*40+ 'px';
    console.log(bomb.style.top)
    bomb.style.left = positionHorizontale*40+ 'px';
    console.log(bomb.style.left)
         }  })
    
    


/*Fin partie Nicolas/*


/*** Debut partie Tom


Fin partie Tom***/




