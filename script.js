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
        carreSol.style.top = y*40 + 'px';
        carreSol.style.left = x*40 + 'px';
       }
        
       
       else if (carte[y][x] == 1)
       {
        carreMur = document.createElement("div");
        carreMur.setAttribute("class","mur");
        cadre.appendChild(carreMur);
        carreMur.style.top = y*40 + 'px';
        carreMur.style.left = x*40 + 'px';
       }
        
        
    }
   
}


