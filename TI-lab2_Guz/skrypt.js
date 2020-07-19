// zmienna - przechowujemy tablice stringów
var miesiace = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia',  'września', 'października', 'listopada', 'grudnia' ];


function funkcje() {
    // news1 zmienna wskazująca na element dokumentu html  o id="news1"
    var news1 = document.getElementById("news1");
    //news2 zmienna wskazująca na element dokumentu html o id="news2"
    var news2 = document.getElementById("news2");

    //wpisanie do pobranego elementu dokumentu html treści
    news1.innerHTML = powitanie()+"<br/>"+data()+"<br/>";
    news2.innerHTML = dniDoUrodzin();
}

function powitanie() {
    //zmienna dzisiaj przechowuje date
    var dzisiaj = new Date();

    //zmienna godzina przechowuje godzine ze zmiennej dzisiaj
    var godzina = dzisiaj.getHours();

    //ifik sprawdzający godzinę
    if( (godzina<18) && (godzina>6) ) {
        return 'Dzień dobry,';
    } else {
        return 'Dobry wieczór,';
    }

    //zwracamy dzien dobry lub dobry wieczor
}

function data() {
    //data
    var dzisiaj = new Date();

    //wyciagamy dzien
    var dzien =  dzisiaj.getDate();

    //wyciagamy liczbe miesiaca i do zmiennej miesiac zapisujemy odpowiadajacą mu nazwe z tablicy
    var miesiac = miesiace[dzisiaj.getMonth()];

    //wyciagamy rok
    var rok = dzisiaj.getFullYear();

    //zwracamy stringa
    return 'dzisiaj jest '+ dzien + ' ' +  miesiac + ' ' + ' '  + rok + ' r.';
}

function dniDoUrodzin() {

    var urodzinyDzien = 21;
    var urodzinyMiesiac = 4;
    urodzinyRok = 1997;
    var dzisiaj = new Date();

    //dzien w milisekundach
    var dzien = 24 * 60 * 60 * 1000;

    var uro = new Date(dzisiaj.getFullYear(), urodzinyMiesiac, urodzinyDzien);
    var od = new Date(dzisiaj.getFullYear(), dzisiaj.getMonth(), dzisiaj.getDate());


    var roznica = null;
    var odmiana = null;
    var dataUrodzinString = "( "+ urodzinyDzien + " " + miesiace[urodzinyMiesiac] + " " + urodzinyRok + " )";

    //ODMIANA KONCOWKI

    //formatowanie



    //----------------------------------------------------------------------------------------



    //---------------------------------------------------------------------------------------
    //ROZNICA MIEDZY DATAMI

    if (urodzinyMiesiac >= dzisiaj.getMonth() ) {
            roznica = Math.round(Math.abs((uro - od) / dzien));
        if (roznica === 0){
            return " \uD83C\uDF82 Dzisiaj są urodziny autora tej strony !!! "
        } else
        if (roznica === 1){
            odmiana = "dzień";
        } else {
            odmiana = "dni";
        }
        return "Autor tej strony będzie mieć urodziny za "+ roznica + " " + odmiana + "\n" + dataUrodzinString;
    } else {
        if (urodzinyMiesiac === dzisiaj.getMonth() && urodzinyDzien >= dzisiaj.getDate() ) {
            roznica = Math.round(Math.abs((uro - od) / dzien));
            if (roznica === 0){
                return " \uD83C\uDF82 Dzisiaj są urodziny autora tej strony !!! "
            } else
            if (roznica === 1){
                odmiana = "dzień";
            } else {
                odmiana = "dni";
            }
            return "Autor tej strony będzie mieć urodziny za "+ roznica + " " + odmiana + "\n" + dataUrodzinString;
        }
        else

                roznica = Math.round(Math.abs((uro - od) / dzien));
                if (roznica === 0){
                    return " \uD83C\uDF82 Dzisiaj są urodziny autora tej strony !!! "
                } else
                if (roznica === 1){
                    odmiana = "dzień";
                } else {
                    odmiana = "dni";
                }
                return "Autor tej strony miał urodziny  "+ roznica + " " + odmiana + " temu." + "\n" + dataUrodzinString;

            }


    //----------------------------------------------------------------------------------------

}

function zegarek() {

    var data = new Date();
    //godzine
    var godzina = data.getHours();
    //minuty
    var minuta = data.getMinutes();
    //sekundy
    var sekunda = data.getSeconds();


    //formatowanie
    if (minuta < 10) minuta = "0" + minuta;
    if (sekunda < 10) sekunda = "0" + sekunda;

    //bierzemy stopke z dokumentu html
    var stopka = document.getElementById("stopka");

    //wpisujemy do stopki
    stopka.innerHTML = "&#127774;2020 MG | " + godzina+":"+minuta+":"+ sekunda;

}