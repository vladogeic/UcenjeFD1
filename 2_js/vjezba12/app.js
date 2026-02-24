
//funcionalne metode-skraćuju kod

//prvo nam trebaju poaci

const korisnici=[
    
    { id: 1,  ime: 'Ana' , prezime: 'Kartek' , godina: 25, admin: false},
    { id: 2,  ime: 'Ivana' , prezime: 'Porcio' , godina: 45, admin: true},
    { id: 3,  ime: 'Mirta' , prezime: 'Ivaković' , godina: 57, admin: true},
    { id: 4,  ime: 'Spomenka' , prezime: 'Baban' , godina: 58, admin: true},
    { id: 5,  ime: 'Silva' , prezime: 'Kovač' , godina: 56, admin: false}

];



for(let i=0; i<korisnici.length; i++){
  console.log (korisnici [i].ime);  
}


console.log('**********************************************');

korisnici.forEach(korisnik=> console.log(korisnik.ime));

console.log('**********************************************');
korisnici.forEach(o=>console.log(o.ime));


korisnici.forEach(o=>{
    let poruka= 'Poštovan';
    if (!o.ime.endsWith('a')){
        poruka+= 'i gospodine';
}else{
    poruka+= 'a gospođo';
}
console.log(`${poruka} ${o.ime} ${o.prezime}`);


});


//map()
const samoImena= korisnici.map(o=>o.ime);
console.log(samoImena);

const maliNiz= korisnici.map(({ id, ime, prezime  }) => ({ sifra:id, imeOsobe: ime +' ' + prezime}));

console.log(maliNiz);
console.log('****************');


//find()

const pronaden = korisnici.find( o=> o.id===3);
console.log(pronaden);
console.log(korisnici.find(o=> o.id===10)?.ime);

console.log('****************');

//findIndex

console.log(korisnici.findIndex(o=>o.ime==='Spomenka'));

console.log('****************');

//filter

console.log(korisnici.filter(o=> o.godina>40));

console.log('****************');
//reduce

console.log(korisnici.reduce( (suma,o)=> suma +o.godina,0));   //0 je poočetna vrijednost

console.log('****************');
//some()

const imaAdmin = korisnici.some( o=> o.admin);
console.log (imaAdmin ? 'Ima admin': 'Nema admin');

console.log('****************');

//every()
const sviPunoljetni= korisnici.every(o=> o.godina >= 18);
console.log(sviPunoljetni ?  'Svi su punoljetni': 'Nisu svi punoljetni' );