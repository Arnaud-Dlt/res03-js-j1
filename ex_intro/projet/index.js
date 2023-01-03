const prenom=window.prompt("Ton prénom ?");
console.log(prenom);

const helloYou=`Salut ${prenom}`;
console.log(helloYou);

const nom=window.prompt("Nom ?");
console.log(nom);

const userAge =window.prompt("Quel âge avez-vous ?");
console.log(userAge);

const user=`Salut ${prenom} ${nom}, cette année tu as ${userAge} ans`;
console.log(user)


const dateBirth=window.prompt("Année de naissance ?");
console.log(dateBirth);

const currentYear=2023;
console.log(currentYear-dateBirth);

const year=Date();
console.log(year-dateBirth);

