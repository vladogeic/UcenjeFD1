
//Generator funcije su posebna vrsta funcije koje se mogu zaustaviti usljed izvođenje i nastaviti
// * označava da je to generator funcija
function* brojevniGenerator(){
    console.log("Početak rada generatora");
    yield true;  //prva pauza
    yield 2.8;  //2. pauza
    yield 3;  //3. pauza
    return 'Gotov';
}

// ovdje se funcija brojevniGenerator() ne izvršava
const generator= brojevniGenerator();
//sada će se tek krenuti izvoditi funcija brojevniGenerator

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
//

let g;
do{
g=generator.next();
console.log(g);
} while(!g.done);

function* sljedećiId(){
    let id=1;
    while(true){
     yield `ID_${id++}` ;
     
  }
}
const id = sljedećiId();
console.log(`Sljedeći id:  ${id.next().value}`)

for (let i=0; i<10; i++){
    console.log(`Sljedeći id u petlji: ${id.next().value}`);
}


function* razgovor() {
    while (true) {
        odgovor=yield 'Kako se zoveš?';
        console.log(`generator kaže: Drago mi je, ${odgovor}`);

    }
}

const chat =razgovor();

//1.pokreni generator do 1. yield
let pitanje = chat.next().value;  //Kako se zoveš
console.log(pitanje);

//2. Pošalji Marko i odmah dohvati sljedeće pitanje
pitanje =chat.next('Marko').value;
console.log(pitanje);
console.log(chat.next('Marija').value);
