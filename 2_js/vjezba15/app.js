

function povratnaFuncija(){

console.log('Početak');
}
console.log('Početak');

// console.log('Kraj');



async function apiPoziv(naziv,url,milisekundi =1000) {
console.log(naziv,url,milisekundi);
return await cekaj(milisekundi);
    
}
async function cekaj(ms) {
    return new Promise(resolve =>{
        setTimeout( ()=>{
            resolve(7); //ovdje šaljem fiksno 7 a kada će ovisiti o primljenom broju ms
        }, ms);
    });
}

async function izvedi() {
  //  const r1 =await apiPoziv('Primjer 1', 'https://http.dog',4000);

 //   console.log(r1);

  //  console.log(await apiPoziv ('P2','URL',1000));

   // console.log(await apiPoziv ('P3 čekam 3 sekunde','URL3',3000));





    await fetch('https://dogapi.dog/api/v1/facts?number=2')
    .then(res => res.json())
    .then(data=> data.facts.forEach(o => console.log (o)));
    }

for(let i=0;i<10;i++){
    izvedi()

}