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
/*** Debut partie Claire


Fin partie Claire***/


/*** Debut partie Nicolas


Fin partie Nicolas***/


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
    
    if (carte[y][x] == 3)
    {
        clearInterval(monsterTimer);
    }

    else { 
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
   
}
var monsterTimer = setInterval(monsterMovement, 1000);

/* Fin partie Tom **/


afficherCarte();

