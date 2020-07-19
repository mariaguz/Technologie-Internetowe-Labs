var miesiace = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia',  'września', 'października', 'listopada', 'grudnia' ];

function funkcje() {
    var powitaniee = document.getElementById("powitanie1");
    powitaniee.innerHTML = powitanie()+"<br/>"+data()+"<br/>";
}


function powitanie() {
    var dzisiaj = new Date();
    var godzina = dzisiaj.getHours();
    if( (godzina<18) && (godzina>6) ) {
        return 'Dzień dobry,';
    } else {
        return 'Dobry wieczór,';
    }
}

function data() {
    var dzisiaj = new Date();
    var dzien =  dzisiaj.getDate();
    var miesiac = miesiace[dzisiaj.getMonth()];
    var rok = dzisiaj.getFullYear();

    return 'dzisiaj jest '+ dzien + ' ' +  miesiac + ' ' + ' '  + rok + ' r.';
}

function dniDoUrodzin() {

    var urodzinyDzien = 6;
    var urodzinyMiesiac = 5;
    var dzisiaj = new Date();

    var dzien = 24 * 60 * 60 * 1000;
    var uro = new Date(dzisiaj.getFullYear(), urodzinyMiesiac, urodzinyDzien);
    var od = new Date(dzisiaj.getFullYear(), dzisiaj.getMonth(), dzisiaj.getDate());

    var roznica = null;
    var odmiana = null;

    //---------------------------------------------------------------------------------------
    //ROZNICA MIEDZY DATAMI

    if (urodzinyMiesiac >= dzisiaj.getMonth() && urodzinyDzien >= dzisiaj.getDate() ) {
        roznica = Math.round(Math.abs((uro - od) / dzien));
    } else {
        if(dzisiaj.getFullYear()%4 != 0) {
            roznica = 365 - Math.round(Math.abs((uro - od) / dzien));
        } else {
            roznica = 366 - Math.round(Math.abs((uro - od) / dzien));
        }
    }


    //----------------------------------------------------------------------------------------
    //ODMIANA KONCOWKI

    if (roznica == 0){
        return " \uD83C\uDF82 Dzisiaj są urodziny autora tej strony !!! "
    } else
    if (roznica == 1){
        odmiana = "dzień";
    } else {
        odmiana = "dni";
    }

    //----------------------------------------------------------------------------------------

    return "Autor tej strony będzie mieć urodziny za "+ roznica + " " + odmiana;
}

function zegarek() {

    var data = new Date();
    var godzina = data.getHours();
    var minuta = data.getMinutes();
    var sekunda = data.getSeconds();

    if (minuta < 10) minuta = "0" + minuta;
    if (sekunda < 10) sekunda = "0" + sekunda;
    var stopka = document.getElementById("stopka");
    stopka.innerHTML = "&copy;2020 DG | " + godzina+":"+minuta+":"+ sekunda;

}

