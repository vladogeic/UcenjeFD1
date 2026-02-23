//Try catch je mehanizam koji omogućava obradu iznimke(greške)

//kod koji ima grešku
/*
console.log ('Početak programa');
const i=7;  //ovdje simuliram da je unio korisnik

const rezultat = i+varijabla;

consolelog(rezultat);

console.log('Kraj programa');
*/

try{
     
console.log('Početak programa');
const i=7;
const rezultat = i +varijabla;
console.log (rezultat);
 
}catch(e){

console.log('Greška' , e.name, e.message, e);
}
console.log('Kraj programa');

console.log('Primjer 2');
    const i = 7;
    let rezultat =0;
    try{
        rezultat= i+varijabla;
  }catch (e){
    rezultat=i+1;
  }finally{
    console.log(rezultat);
  }
  console.log('Kraj primjer');

  function odradiPosao(){
    const i=-5;

    if (i<0){
        throw new Error('Broj mora biti veći ili jednak 0');
        
    }
    return Math.sqrt(i);
  }

  try{
console.log(odradiPosao());
  }catch (e){
console.log(e.message);
  }