

// rekurzija- kada funcija zove samu sebe uz uvjet prekida rekurzije



let sum =0;
for(let i=1; i<100; i++){
    sum+=1
}
console.log(sum);

function zbroji (broj){
    if(broj===1){
        return 1;
    }
    return broj+ zbroji(broj-1);
}

console.log(zbroji(100));

function so(){
    so();
}
so();