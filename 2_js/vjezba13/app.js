// OOP Objektno orjentirano programiranje

//Probajte ovo dvoje naučiti napamet

//Klasa je opisnik objekta , objekt je instanca klase

class Osoba{
    // OOP princip učahurivanja (encapsulation)
    // skrivanje svojstva
    #ime; 

    // omogućavanje pristupa skrivenom svojstvu
    get ime(){return this.#ime;}
    set ime(s){this.#ime=s;}

    setIme(s){
        this.#ime =s;
    }

    constructor(ime ='') {
        console.log("Konstruiram objekt iz klase Osoba")
    }
}

//Objekt je instanca (pojavnost) klase
// o je objekt
const o =new Osoba(); // new je kotiv konstruktora
o.ime ='Pero'; //bez set u klasi
o.setIme('Marija');
console.log(o.ime);
const d=new Date();
    console.log(d.getDate());

    const jucer=new Date(2025,1,24);

    const student = new Osoba('Nikolina');
    console.log(student.ime);

    // OOP princip nasljeđivanja

    class Polaznik extends Osoba{

        #odradioObaveze
        get odradioObaveze(){return this.#odradioObaveze;};
        set odradioObaveze (b) {this.#odradioObaveze =b;};
        constructor (ime = '', b= false){
            super(ime);
            this.#odradioObaveze =b;
        }
    }
    [
        new Polaznik('Lucija', false), new Polaznik ('Rita', true)
    ] .forEach (o=> console.log(o.ime, o.odradioObaveze));

    const p= new Polaznik(),
    pime ='Karlo';
    p.odradioObaveze = true

    console.log(p.ime, p.odradioObaveze);

    class Predavac extends Osoba {
        #redoviti;
        get redoviti(){ return this.#redoviti;}
        constructor (ime ='', redoviti= false){
            super(ime);
            this.#redoviti = redoviti;
        }
    }

    const predavac = new Predavac ('Gordana',true);
    console.log(`${predavac}`); //predavac je instanca klase Predavac
    console.log(p); // p je instanca klase Polaznika

    console.log(jucer); //ozvala se metoda toStrin()

    console.log(Math.random());
    //Ideja objekta jest da bude kontejner za podatke i metode koje upravljaju
    //Što se kodom koji nema potrebu pamtiti podatke već samo izvesti neku logiku


    class Pomocno{
        static slucajniBroj (min =0, max= 0){
            if (min == 0 && max===0) {
                return Math.random();
            }
            return (Math.random ()* (max-min) +min).toFixed();    

        }
    }
    console.log(Pomocno.slucajniBroj());
    console.log(Pomocno.slucajniBroj (25,75));

