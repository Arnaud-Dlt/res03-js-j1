//EXO1

/*
let i=0;
while(i<=10){
    console.log(i);
    i=i+1;
}

let j=25;
while(j>=20){
    console.log(j);
    j=j-1;
}

let k=0;
while(k<=20){
    if(k%2===0){
        console.log(k);
        k++;
    }
    else {
        k++;
    }
}
*/

//EXO2 
/*
let i=0;

while(i<=10){
    if(i%2===0){
        console.log(`${i} Pair`);
        i++;
    }
    else {
        console.log(`${i} Impair`);
        i++;
    }
}
*/

//EXO3

let i=0;

while(i<=100){
    if(i%2===0 && i<=50){
        console.log(i);
        i++;
    }
    else if(i>50){
        console.log(`${i} Pair`);
        i=i+3;
    }
    else{
        i++;
    }
}
