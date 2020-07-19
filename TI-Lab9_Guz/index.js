
function witaj(imie){
    console.log("Witaj " + imie + "!");
}

let czesc = function(imie){
    console.log("Czesc " + imie + "!");
}
console.log("test");

setTimeout(function(){
   witaj("timeout")
   }, 2000);

witaj("Abc");
czesc("abc");

//console.log(module);

const logger = require('./logger');
console.log(logger);
//logger = 'abc';
//logger.log("wiadomosc z loggera");

const path = require('path');
var sciezka = path.parse(__filename);
console.log(sciezka);

const os = require('os');
let calkowitaPamiec = os.totalmem();
let wolnaPamiec = os.freemem();

console.log('Calkowita pamiec: ' + calkowitaPamiec);

//Template string
//ES6 / ES2015:
console.log(`Wolna pamięć: ${wolnaPamiec}`);


const fs = require('fs');
const pliki = fs.readdirSync('./'); //tablica plików w katalogu
console.log(pliki);

fs.readdir('./', function (err, files) {
   if (err) console.log('Error: ', err);
   else console.log('Wynik: ', files);
});

console.log('\n========================================\n');

const EventEmitter = require('events'); // EventEmitter to klasa
const emitter = new EventEmitter();

//Rejestrujemy listenera
emitter.on('messageLogged', function(){
   console.log('Listener wywołany');
});

//emitter.on('messageArg', function(arg){
//   console.log('Listener z argumentem: ',arg);
//});

emitter.on('messageArg', (arg)=> {
    console.log('Listener z argumentem: ', arg);
});


//Wznosimy event
emitter.emit('messageLogged');
emitter.emit('messageArg', {id: 1, url: 'http://'});

console.log('\n========================================\n');

const Logger = require('./logger');
const logger2 = new Logger();

logger2.on('messageLoggedLogger', (arg) =>{
    console.log('Listener logger wywolany: ', arg);
});

logger2.log('wiadomosc loggera', 2, 'abc');

console.log('\n========================================\n');

const http = require('http');
const server1 = http.createServer();

server1.on('connection', (socker) =>{
   console.log('Nowe polaczenie...');
});
server1.listen(3001); //http://127.0.0.1:3001/
console.log('serwer 1 oczekuje na porcie 3001...');

const server2 = http.createServer((req, res) => {
    if (req.url === "/"){
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.write('Witaj świecie');
        res.end();
    }
    if (req.url === "/api/liczby"){
        res.writeHead(200, {'Conent-type' : 'application/json; charset=utf-8'});
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server2.listen(3002);
console.log('serwer 2 oczekuje na porcie 3002...');