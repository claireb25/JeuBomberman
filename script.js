var carte = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0]
];
var x = 0;
var y = 0;
var carreSol;
var cadre = document.getElementById('fenetre');

for (x=0; x<12; x++){
    for (y=0; y<12; y++){
        carreSol = document.createElement("div");
        carreSol.setAttribute("class","sol");
        cadre.appendChild(carreSol);
        carreSol.style.top = y*40 + 'px';
        carreSol.style.left = x*40 + 'px';
        
        
        console.log(carreSol.offsetTop);
        
        
        
    }
   
}


