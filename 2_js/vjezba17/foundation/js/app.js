$(document).foundation()


// u $ () dolazi css selektor
//nakon selektora dolazi akcija
//https://api.jqery.com
$('#promjeniNaslov').click(function(){

    console.log('Kliknuo sam Simle button');
    $('#naslov').text('Dobrodošli');
    return false; //prekida zadano ponašanje
});

$('#sakrijKomponente').click(function (){
   $('#komponente').hide();
   return false;
});

$('#prikaziKomponente').dblclick(function(){
    $('#komponente').show();
}); 


const boja = 'rgb(214.8186602871, 235.9894736842, 250.0313397129)';

$('.callout.primary').mouseover(function(){
    // $(this) je onaj na kojem si trenutno
    $(this).css('background-color','#eee');
});

$('.callout.primary').mouseout(function(){
    // $(this) je onaj na kojem si trenutno
    $(this).css('background-color',boja);
});

$('#unos').keyup(function(e){
    if(e.key==='b' || e.key==='B'){
        $('p').css('color','red');
    }

    if(e.key==='r' || e.key==='R'){
        $('p').css('color','black');
    }
});

$ ('#crveno').click(function(){
    $('p').css('color' ,'red');
    return false;
});