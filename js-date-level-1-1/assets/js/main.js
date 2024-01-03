// - In dieser Übung werden wir [Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date id=) lernen.
// - Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.
// - Speichere die Werte in Variablen (date1, date2, usw.).
// - Verwende innerHTML, um das Ergebnis darzustellen.
// - Teste die folgenden Werte:  new Date("September 2, 2019 09:00:00")  new Date(0)  new Date(31556908800)  new Date(86400000)

// # ☝🏼 Hinweis
// - Beachtet, dass es sich bei dem Date Object um eine Zeitangabe handelt. Daher ist die erste Zeile in der Ergebnisvorschau nicht tagesaktuell. ;)

const date1 = new Date("September 2, 2019 09:00:00")
console.log(date1)

const date2 = new Date(0)
console.log(date2)

const date3 = new Date(31556908800)
console.log(date3)

const date4 = new Date(86400000)
console.log(date4)

const div = document.createElement("div")
document.body.appendChild(div)
div.innerHTML = date1  + ` = new Date("September 2, 2019 09:00:00")` + "</br>"
+ date2 + ` = new Date(0)` + "</br>"
+ date3  + ` = new Date(31556908800)` + "</br>"
+ date4 + ` = new Date(86400000)`