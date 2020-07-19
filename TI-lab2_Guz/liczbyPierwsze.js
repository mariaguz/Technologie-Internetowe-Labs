
pierwsze = function (ilosc) {
    this.ilosc = ilosc;
    this.pierwsze = [];  //tablica liczb pierwszych
};

// getters

pierwsze.prototype.getilosc = function () {
    return this.ilosc;
};

pierwsze.prototype.getpierwsze = function () {
    return this.pierwsze;
};

pierwsze.prototype.waliduj = function () {
//czy wprowadzone zostały poprawne dane
//not number, null, this.A jest pusta w dziwny sposób xD
    if(this.ilosc === 'NaN' || this.ilosc == null || !this.ilosc)
        return false;

    return this.ilosc !== 0;
};

pierwsze.prototype.licz = function () {
//jesli dane sa ok
    if(this.waliduj()){

        //wpisuje do zmienych x1 i x2 miejsca zerowe
        this.zwrocPierwsze();
    }else{

        //wyswietla alert
        alert('Nie podano wymaganych danych');
    }
};

pierwsze.prototype.czyjestpierwsza = function (liczba){

    if(liczba<2){
        return false;
    }

        for (var i=2; i<liczba; i++) {
            if (liczba%i===0) {
                return false;
            }
        }
        return true;

};

pierwsze.prototype.zwrocPierwsze = function () {

    var l=0;
    for (var liczbaa=2; ; liczbaa++) {
        if (this.czyjestpierwsza(liczbaa)) {
            l++;
            this.pierwsze.push(liczbaa);
        }

        if (l === this.ilosc) {
            break;
        }
    }

};


function podpiecie() {

    // przycisk w formularzu do zmiennej element
    var element = document.getElementById("licz2");

    // jesli klikniemy to sie dzieje to wszystko niżej (addEventListener) type - to zrobimy to function() się zrobi
    element.addEventListener("click", function () {
        //wpisuje wartosci do zmiennej ilosc z formularza po id  (bierze element i jego value)
        var ilosc = document.getElementById('ilosc').value;


        //tworzymy nowy "obiekt"

        var pierwszeliczby = new pierwsze(parseInt(ilosc));

        //sprawdzamy wartosci i obliczamy miejsca zerowe
        pierwszeliczby.licz();

        // jesli delta nie zostala zastapiona jaka wartoscia to cos jest nie tak
        if (pierwszeliczby.getilosc() === null)
            return false;

        //bierzemy diva o id lista zeby wpisac do niego wyniki
        var lista = document.getElementById("lista2");

        //zmienna do przechowania tablicy liczb pierwszych
        var pierwszeTablica = null;



        // czysci diva(liste) jesli cos tam jest
        if(lista.hasChildNodes()){
            while (lista.firstChild){
                lista.removeChild(lista.firstChild);
            }
        }

        // wypisuje napis wynik w dokumencie html
        var wynik = document.createTextNode("Wynik:" );

        //tworzymy elementy dokumentu html   unordered list i element listy

        var ul = document.createElement("ul");


        //wypisanie miejsc zerowych
        if(ilosc > 0){
            for(var i=0; i<ilosc ;i++){

                var li = document.createElement("li");
                //tworzymy zmienna z tekstem ktory ma zostac wstawiony do html (do li)
                var liText = document.createTextNode(pierwszeliczby.pierwsze[i]);

                //liText umieszczamy wewnatrz li
                li.appendChild(liText);

                //li wewnatrz ul
                ul.appendChild(li);
                //czyli umieszczenie liText w ul rozbite na dwa

                lista.appendChild(ul);

            }
        }


    });

}