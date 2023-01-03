
let numb=24;
let usernumb="";
console.log(usernumb);

while(parseInt(usernumb)!==numb)
{
    usernumb=window.prompt("Trouver un nombre entre 1 et 100");
    
    if(usernumb>numb)
    {
    window.alert("C'est moins !");
    }
    
    else if(usernumb<numb){
    window.alert("C'est plus !");
    }
    
    else {
        window.alert("Gagné !");
    }
}

