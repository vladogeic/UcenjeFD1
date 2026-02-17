//beskonačna while petlja
while(true){
console.log('Edunova');
break;
}

let brojac=0;
console.time('while petlja');
while(brojac++<100){
    //console.log(brojac);
console.log(brojac);
}
console.timeEnd('while petlja');

let brojUnos ='1262';
//zbroji sve znamenke danog broja
//ulaz: 1262, izlaz :11
console.time('ZB1');
let zbroj=0
for(let i=0; i<brojUnos.length;i++){
    zbroj +=parseInt(brojUnos[i]);
}
console.log(zbroj);
console.timeEnd('ZB1');

console.time('ZB2');
let broj= parseInt(brojUnos);
zbroj=0;
while(broj>0){
zbroj += broj% 10;
broj=broj-(broj % 10);
broj = broj/10;  //ovo je bilo sumnjivo,zato dodavanje gore

}
console.log(zbroj);
console.timeEnd('ZB2');
//čitati više o optimizaciji
//big o notacija

//Niti u for, niti u while se ne mora ući

let br=-5;   //ova vrijednost je ostala od koda prije
for(let i=0; i> br;i--){
    console.log('Ušao u for petlju',i);
}

//dođu podaci s API
let podaciSApi = [];    //{ime: 'Pero' }, {ime: 'Marko'};

 while(podaciSApi.length>0){
    console.log('Ušao u while petlju' , podaciSApi.pop()?.ime);
}