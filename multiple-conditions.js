var isJobParson = true;
var salary = 40000;
var cars = 0;

if(isJobParson === true  && salary > 39999 && cars >= 1){
    console.log('Aso juntos beya koray fale !!!!$$$')
}
else{
    console.log('Jaaa sala Poor fakar TOr kopalay baya nai')
}


if(isJobParson === true  || salary > 39999 || cars >= 1){
    console.log('Cholo sona pram kori ')
}
else{
    console.log('Tar friend ar numbar toi amar type ar na!!!')
}


if(isJobParson === true  && (salary > 39999 || cars >= 1)){
    console.log('Cholo sona pram kori ')
}
else{
    console.log('Tar friend ar numbar toi amar type ar na!!!')
}


if((isJobParson === true  && salary > 39999) || cars >= 1){
    console.log('Cholo sona pram kori ')
}
else{
    console.log('Tar friend ar numbar toi amar type ar na!!!')
}