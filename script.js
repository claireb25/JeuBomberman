var carte = [12,12];
var x = 0;
var y = 0;
const sol = document.getElementById('fond');
console.log(sol);
for (x = 0; x<12; x++){
    for (y = 0; y<12; y++){
        sol.style.top = y*40 + 'px';
        sol.style.left = x*40 + 'px';
        sol.src = "media/sol.jpg"  
        console.log(sol.style.top);
    }
   
}


