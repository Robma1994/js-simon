//Descrizione:
//Attraverso un alert() l'utente vedrà 5 numeri generati casualmente.
//(Con un alert non ci sono riuscito);
var fiveNumberRdn = [];
setTimeout(number,1000);

/*L'utente avrà 30 secondi per memorizzarli, 
quindi appena escono i numeri parte un timer di 30 secondi.*/
var seconds = 3;
var theEndTimer = setInterval(timer, 1000);
/*Dopo 30 secondi termina il timer(scade) e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente. In che modo inserirà i numeri? Tramite il prompt().*/
var listUser = [];

/*Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
(Per fare questo significa che i numeri generati casualmente sono stati salvati in 
una variabile, in quel modo possiamo fare il confronto)*/

var numUguali = [];
//FUNZIONI
function rdnNumber(max){
    return Math.floor(Math.random()* max) +1;
}

function timer() {
    document.getElementById("countdown").innerHTML = seconds; 
    if (seconds == 0) {
        clearInterval(theEndTimer); 
        for (var i = 0; i < 5; i++) {
            var numeri = parseInt(prompt("inserisci numeri"));
            listUser.push(numeri);
            if(listUser[i] == fiveNumberRdn[i]){
                numUguali.push(listUser[i])
                document.getElementById("countdown").innerHTML = listUser;
            }
        }   
    }
    seconds--;
}
function number() {
    for (var i = 0; i < 5; i++) {
        var number = rdnNumber(100);
        fiveNumberRdn.push(number);
    }
    console.log(fiveNumberRdn);
    document.getElementById("rdnNumber").innerHTML = ("Hai 30 secondi per memorizzare i seguenti numeri: " + fiveNumberRdn);
}

