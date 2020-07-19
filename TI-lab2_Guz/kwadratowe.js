//constructor z argumentami(a,b,c)

kwadratowe = function (a, b, c) {

    this.A = a;
    this.B = b;
    this.C = c;
    this.delta = null;
    this.x1 = null;
    this.x2 = null;
};

//metoda (.prototype.) liczDelta
kwadratowe.prototype.liczDelta = function() {

    //wzor na delte, wpisujemy w zmienna delta
    this.delta = (this.B * this.B) - 4 * this.A * this.C;

    //zwracamy delte
    return this.delta;
};


//metoda (.prototype.) miejscaZerowe
kwadratowe.prototype.miejscaZerowe = function () {

    // zapisujemy do d wartosc delty
    var d = this.liczDelta();

    //sprawdzamy wartosc delty i liczymy miejsca zerowe i wpisujemy do zmiennych
    if (d > 0) {
        this.x1 = ((this.B * -1) - Math.sqrt(d)) / (2 * this.A);
        this.x2 = ((this.B * -1) + Math.sqrt(d)) / (2 * this.A);

    } else if( d === 0){
        this.x1 = (this.B * -1) / (2 * this.A);
        this.x2 = null;

    } else{
        this.x1 = null;
        this.x2 = null;
    }
};

// getters

kwadratowe.prototype.getX1 = function () {
    return this.x1;
};

kwadratowe.prototype.getX2 = function () {
    return this.x2;
};

kwadratowe.prototype.getDelta = function () {
    return this.delta;
};

kwadratowe.prototype.waliduj = function () {
//czy wprowadzone zostały poprawne dane
//not number, null,
    if(this.A === 'NaN' || this.A == null || !this.A)
        return false;
    if(this.B === 'NaN' || this.B == null || !this.B)
        return false;
    if(this.C === 'NaN' || this.C == null || !this.C)
        return false;
    return this.A !== 0;
};

kwadratowe.prototype.licz = function () {
//jesli dane sa ok
    if(this.waliduj()){

        //wpisuje do zmienych x1 i x2 miejsca zerowe
        this.miejscaZerowe();
    }else{

        //wyswietla alert
        alert('Nie podano wymaganych danych');
    }
};

function podpiecie() {

    // przycisk w formularzu do zmiennej element
    var element = document.getElementById("licz");

    // jesli klikniemy to sie dzieje to wszystko niżej (addEventListener) type - to zrobimy to function() się zrobi
    element.addEventListener("click", function () {
        //wpisuje wartosci do zmiennych a, b, c z formularza po id  (bierze element i jego value)
        var a = document.getElementById('wsp_a').value;
        var b = document.getElementById('wsp_b').value;
        var c = document.getElementById('wsp_c').value;

        //tworzymy nowe rownanie (A,B,C,x1,x2,delta) z wartosciami z formularza

        var rownanie = new kwadratowe(a, b, c);

        //sprawdzamy wartosci i obliczamy miejsca zerowe
        rownanie.licz();

        // jesli delta nie zostala zastapiona jaka wartoscia to cos jest nie tak
        if (rownanie.getDelta() === null)
            return false;

        //bierzemy diva o id lista zeby wpisac do niego wyniki
        var lista = document.getElementById("lista");

        //zmienne do przechowania wartosci miejsc zerowych
        var x1 = null;
        var x2 = null;

        // czysci diva(liste) jesli cos tam jest
        if(lista.hasChildNodes()){
            while (lista.firstChild){
                lista.removeChild(lista.firstChild);
            }
        }

        // wypisuje napis wynik w dokumencie html
        var wynik = document.createTextNode("Wynik:" );


        //wypisanie miejsc zerowych
        if(rownanie.getDelta() > 0){

            x1 = 'x\u2081 = ' + rownanie.getX1();
            x2 = 'x\u2082 = ' + rownanie.getX2();


        }else if(rownanie.getDelta() === 0){
            x1 = 'x = ' + rownanie.getX1();
        } else{
            x1 = 'Brak miejsc zerowych, \u0394 < 0';
        }

        //tworzymy elementy dokumentu html   unordered list i element listy
        var ul = document.createElement("ul");
        var li = document.createElement("li");

        //tworzymy zmienna z tekstem ktory ma zostac wstawiony do html (do li)
        var liText = document.createTextNode(x1);


        //liText umieszczamy wewnatrz li
        li.appendChild(liText);

        //li wewnatrz ul
        ul.appendChild(li);
        //czyli umieszczenie liText w ul rozbite na dwa


        //jeśli istnieje x2 to robimy to samo dla drugiego miejsca zerowego
        if(x2){

            var li2 = document.createElement('li');
            var liText2 = document.createTextNode(x2);

            li2.appendChild(liText2);
            ul.appendChild(li2);
        }

        //wpisanie do diva "Wynik:" i całą ul
        lista.appendChild(wynik);
        lista.appendChild(ul);
    });

}