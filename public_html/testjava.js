/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Hallo Welt auf MDNf
function greetme(user) {
   return "Hi " + user;
}

greetme("Carsten");

//Thythos-Schnipsel

//Firefox-Konsole öffnen mit CTRL+K

//String-Maskiertung, Escapen,  (z.B. ANführungszeichen im String)  mit "\"

/*
 * Vergleichsoperatoren - wie gehabt - nur bei "=" muss "==" geschrieben
und "===" wenn datentypbezogen verglichen und nicht String mit Number, was bei
Javascript auch true bedeuten würde (ist bei Delphi no go)
"!=" ist der Ungleich-operator, "!==" der strikte Vergleich
 */ 

"Hallo Welt"

//Variablendeklaration
var x = 5;
 x + 5;
 x = 5 + 2;
 //Kurzform:
 x += 2;
 
 x = x + 1;
 
 //Kurzform - x wird zurückgegeben und erst dann wird gerechnet
 x++
 
 // gleich ausgeben
 ++x
 
//Meldung ausgeben 
alert("Hallo Welt");
var a = "Otto";
var b = "Wilhelmine"

//if-else-Kontrollstruktur

if (a.length > b.length) {
    prompt("a ist länger");
}
else {
    prompt("a ist kürzer");
}
 
//Prüfen, ob eine Zahl eingegeben wurde: isNaN (is not a number)
if (isNaN(a)) {
    prompt("Gib eine Zahl ein, Du Trottel!")
    (...)
}

//Verundung && und Vewroderung || und Vernichtiung ![Variable]
if (nr > 0 && nr < 100) {alert("im Bereich zwischen 0 und 100");}
if (nr == 0 || nr == 100) {alert("Die Zahl beträgt 0 oder 100");}
if (!nr > 100) {alert("Diese Zahl ist nicht größer 100");

//Funktionen
function ZeigeZeichen(str) {
    if (str) //Prüft, ob str nicht leer ist - ansonsten keine Ausführung
    {
        alert("Das erste Zeichen ist ein " + str[0]);
    }
}
// Funktion mit zwei Parameter
function ZeigeZeichen(str, i) {
   
if (isNaN(i)) {       
i = 0;
}
if (str) {        
alert("Das " + parseInt(i+1) + ". Zeichen ist ein " + str[i]);
    }
}

//Rekursionen - Die Funktion fuft sich immer wieder auf ==> Abbruchbedingung einfügen, sonst Stack Overflow

        /**
         * Comment
         */
        function name{
            string = prompt('Name eingeben');
            alert = 'Länge: ' + string.length;
                    
        }
        
        }