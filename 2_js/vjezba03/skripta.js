//Operatori
// = operator dodijeljivač
//typeof omogućuje pristup tipu podatka
//== operator uspoređivanja samo po vrijednosti


//=== uspoređuje po tipu i po vrijednosti


// aritmetički operatori
//+ - * /
const a = 2, b=3; //simulacija unosa od korisnika (ulaz)

let rez = a+b; //algoritam
console.log(rez); //izlaz



//modulo operator %
//ostatak nakon cijelobrojnog dijeljenja
console.log(9%2);  1
console.log(10% 2); 0

console.log(1000% 100 === 0); //true



//operatori dodjele
// =
//želim vrijednost varijable rez uvećati za 2
rez= rez +2 //u matematici se prvo izvodi desna strana i dodijeljuje lijevoj
console.log(rez);  // 7
rez +=2;
console.log(rez);  // 9
rez -= 5;
console.log(rez);  // 4

const x=2
rez+= x;
console.log(rez);  // 6


//ako ovo imaš u kodu nešto ne štima kod tebe.

rez+=1
console.log(rez);  // 7



//operatori inkrement i dekrement
rez++; //  -> ali niti ovo se ne radi
console.log(rez);  // 8
// u isto vrijeme možeš koristiti i uvećavati/umanjivati
console.log(rez++);  // 8 prvo sam ispisao trenutno vrijednost i tada je uvećao 
console.log( ++rez); // 10 (9 je bilo nakon ispisa u prethodnoj linij) pa prvo uvećanje tek onda ispis
console.log(--rez); // 9
console.log(rez--); //9
console.log(rez)  //8

//operatori uspoređivanja
//== uspoređuje samo po vrijednosti
console.log( 5 =='%' ); //true
console.log( '5' ==5); //true
console.log( 3 == 7); //false

// === uspoređuje i po tipu i po vrijednosti
console.log('Osijek' === 'Osijek'); // true
console.log('Osijek' === 'osijek'); //false 
    console.log( 5==='5'); //false
console.log('Edunova'  === 'Druga škola');// false

// !=rezličito
console.log( 4  != 3); //true
console.log('4' !=4); //false

    // veće od>
    //veće jednako od >=
    let godine = 18
    console.log(godine > 18); //false
    console.log(godine >= 18); //true

    //manje od <
    //manje ili jednako od<=
    godine = 21
    console.log(godine <21); //false
    console.log(godine <= 21); //true

    //logički operatori: and(i), or (ili) i not(ne)
    //boolova tablica za and

    //boolova tablica za and (&&) -mora se u JS napisati&&
    const i1 = 5 == '5'; //true  i1 = true
    const i2 = 7 > 9; // false
    //i1        i2    rez (i1 & i1) 
    //false   false   false    
    //false   true    false
    //true    false   false
    //true     true   true
    console.log(i1 && i2); // false

    //boolova tablica za or(||) ALTGR+W- mora se u JS ||
    // i1      i2     rez(i1 || i2)
    // false   false   false
    // false   true     true
    //true     false    true
    //true     true     true
    console.log( i1|| i2) ; //true

    //boolova tablica za not(!)
    // i1       rez(!i1)
    // false    true
    // true     false
    console.log(!i1); // false

    //ternarni operator  ->, koristit ćemo ga u if naredbi
    //upitnik
    const poruka = godine >=18 ? 'Punoljetan' : 'Maloljetan' ;
    console.log( poruka);

    //sšpajanje stringova ( concatenation)  +
    const skola = Edunova
    console.log('Najbolja skola je' + skola); // ovo se ne preporuča već backtick
    console.log( `Najbolja skola  je ${skola}` );
    const razred = 5; 
    console.log('Idem u ' + razred + ' . razred.');
    console.log(`Idem u ${razred}.razred.`)

    //spred operator
      // koristi se na nizovima i redovima

      const niz = [2,2,3,3]  // varijablu niz ne smijem mijenjati
      console.log(niz);
      const noviNiz =[1,...a.niz, 4];
      console.log(noviNiz);

      // na objektu
      const osoga = {
ime: 'Pero' ,
prezime: 'Perić'

      };

      console.log(osoba);
      // želim proširito pojam osobe na polaznika
      const polaznik = {
        ...osoba,
        edukacija: 'Frontend'
      };
      console.log(polaznik);

      //destucting -> suprotno od ppread
      //niz
      const[prvi, drugi] = [1, 2]; // s desne strane se nalazi niz s dva elementa, on  je napravip dvije varijable koje imaju vrijednost

      console.log(prvi);
      console.log(drugi);

      // objekt destructing
      const{prezime,...objektBezPrezimena} = polaznik;
      console.log(objektBezPrezimena); // ovo mi je škart koji postoji ali ne moram ga koristiti

      //nullish coalescing operator (??)
      let sifra = nullconsole.log(sifra ?? 'Šifra nije postavljena') // ako je šifra postavljena ispisuje se njezina vrijednost, inače se ispisuje šifra nije postavljena

      // optional chaininig(?.)
      // malo kompleksniji JSON
      const korisnik = {
        adresa: {
            grad:'Osijek'
        }
      };
      console.log(korisnik.adresa.grad); //ispisuje Osijek
      console.log(korisnik.adresa.ulica);// undefined , kod korištenja greška

      console.log(korisnik?.adresa?.ulica); //undefined, bez greške

      //typeof, instanceof
      console.log([3,4,5] instanceof Array); //true

      // in operator
      console.log('prezime' in osoba); // true
      console.log('prezime' in objektBezPrezimena); //false

      // NEĆEMO KORISTITI - operatori nad bitovima bitwise(& i |) -tko želi neka samostalno pročita




