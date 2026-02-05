
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;


  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    //console.log('1. zadatak');
    //console.log(a);

    //ovdje riješavam zadatak 1
const x=Number(a)

if(!x &&  x!=0){
rezultat.innerHTML='Unesi broj u polje A'
return
}
const  y=Number(b)
if(!y){
  rezultat.innerHTML='Unesi broj u polje B'
  return
}

console.log(x)


    if(x>y){
      rezultat.innerHTML=x
    }else if(y>x){
      rezultat.innerHTML=y
    }
    else{
      rezultat.innerHTML= 'Brojevi su jednaki'
    }

    //Ovdje je kraj zadatka 1

   
    return; // short curcuiting prekida izvođenje cijele funkcije ()=>{}
  }


  if(zadatak=== '2'){


    return;

  }
  // Ovdje će doći drugi zadatak

  if(zadatak==='6'){

const x = Number(a);
const y = Number(b);
const z = Number(c), k= Number(d);

console.log(x,y,z,k)

if(!x){
  rezultat.innerHTML='Unesi broj u polje A';
  return
}
if(!y){
  rezultat.innerHTML='Unesi broj u polje B';
  return
}
if(!z){
  rezultat.innerHTML='Unesi broj u polje C';
  return
}
if(!k){
  rezultat.innerHTML='Unesi broj u polje D';
  return
}
rezultat.innerHTML=(x+y)*(z+k);







    return;

  }
// Za upisano ime grada u polje B ispiši je li sjedište Edunove ili ne</option>

if(zadatak==='7'){

  if(!b){

    rezultat.innerHTML='Obavezan unaos u polje B';
    return;
  }

    if(b.toLowerCase()==='osijek'){
    rezultat.innerHTML=`${b} je sjedište Edunove`
    }else{
      rezultat.innerHTML=`${b} nije sjedište Edunove`
    }
    rezultat.innerHTML=b.tolowerCase()==='osijek';

    
    
    
    return;
  }

//Za upisanu vrijednost u polju A ispiši kubikažu

  if(zadatak==='8'){
    const x=Number(a)
    if(!x || x<=0){

      rezultat.innerHTML='Broj mora biti veći od 0'
      return;
    }
    rezultat.innerHTML=x*x*x

    return;


  }  

//Za upisanu vrijednost u polje D ispiši samo decimalni dio

if (zadatak=== '9'){
  const cijeliBroj =parseInt(d)
  const decimalniBroj =parseFloat(d)
  if(!decimalniBroj){
rezultat.innerHTML= 'Niste unijeli broj'
return;
  }
  console.log(cijeliBroj,decimalniBroj)
  rezultat.innerHTML= decimalniBroj-cijeliBroj  

return;
}










  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



