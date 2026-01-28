//varijabla je prostor u memoriji
//može biti različitih tipova
//u JS se može definirati na tri načina

//ulaz podatka u program
//promt uvijek unosi string
const ime='Edunova'; //prompt('Unesi svoje ime');
//Fiksno stavljam neku vrijednost da me pri iz
//ako hoćete testirati

console.log( `Dobar dan ${ime}!`);

console.log(typeof ime, ime);

const unosGodina= prompt('Unosi godinu');

// konverzija u broj
const godina= Number(unosGodina);

console.log(typeof godina, godina );
//odavdje više ne koristim promt već fiksno string

//decimalni broj-floating point
const unosDecimalni='3,14'; //decimalni dio s  broj

const decimalniBroj = parseFloat(unosDecimalni);

console.log(typeof decimalniBroj, decimalniBroj);

//cijeli broj
const cijeliBroj = parseInt('12');
console.log(typeof cijeliBroj, cijeliBroj);

//logička vrijednost
const logickaVrijednost = true; //false

console.log(typeof logickaVrijednost, logickaVrijednost);


//const je konstanta , varijabla se ne može mijenjati
// logičkaVrijednost=false; Uncaught TypeEror

// let dozvoljava promjenu vrijednosti varijable

broj =9;

console.log(typeof broj, broj);

//let broj= 2; Ne može se redeklatrirati varijabla s let

//JS je interpreter
broj= '9'; // ja sada mijenjam tip varijable
console.log(typeof broj, broj);

//STARO, ne koristiti -što ne znači da ne postoji

var i= 7;
console.log(typeof i, i);
i =7;
console.log(typeof i, i);
var i = true; //var omogućava redeklaraciju i to nije dobro
console.log(typeof i, i);

const velikiCijeliBroj =  23658888888888n;
console.log(typeof velikiCijeliBroj, velikiCijeliBroj);

let x; //undefined
console.log(typeof XMLDocument, x);
x=6;
console.log(typeof x,x); 

let y = null;
console.log(typeof y,y);
// JSON - javaScrit Object Notation
const osobaObjekt={
    ime:'Pero' ,
    godine: 27,
    znaProgramirati: true
};

console.log(typeof osobaObjekt, osobaObjekt);
console.table(osobaObjekt);

const brojevi =[2,3,1,2]; //ALTGR+ F daje

console.log(typeof brojevi, brojevi); //piše object ati to je Array

const podaciBackend =[
{
    ime: 'Pero' ,
    prezime: 'Perić+'
}    ,
{

    ime: 'Ana',
    prezime: 'Majić'
}
];
console.table(podaciBackend);
// tradicionalni način pisanja funcije


function pozdrav(){

    console.log('Hello iz funkcije');
}
console.log(typeof pozdrav, pozdrav);

//trenutni način pisanja funcija
const pozdravi = () => console.log('Hello iz funcije nove');

console.log(typeof pozdravi, pozdravi);

const id1 = Symbol('id');
const id2 = Symbol('id');

    console.log(typeof id1, id1);

    //operator provjere jednakosti
    // ==-> provjerava samo po vrijednosti '2' je jednako 2
    // == -> rovjerava samo po tiu i o vrijednosti'2' nije jednako 2
    console.log(id1== id2);
    console.log(id1==id2);
