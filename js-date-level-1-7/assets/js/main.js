// - Lernziel: Erstellung einer JavaScript-Function zur Unterscheidung zwischen Wochenenden und Arbeitstagen mithilfe von bedingten Anweisungen, Vergleichsoperatoren und getDay().
// - Schreibe eine Function, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
// - Überprüfe dein Ergebnis in der Konsole.
// - Nutze:  Conditionals Statement  Comparison Operators  Funktion mit einem Parameter  Aktuelles Datum  getDay()  return "Weekend"  return "Arbeitstag"
// - Teste folgende Daten:  12.15.2019  2.16.2001  2.1.2020  2.29.2020

function checkDay(date) {
    const day = date.getDay()
    if (day === 0 || day === 6) {
        return "Wochenende"
    } else {
        return "Arbeitstag"
    }
}

console.log(checkDay(new Date(2019, 15, 12)))
console.log(checkDay(new Date(2001, 16, 2)))
console.log(checkDay(new Date(2020, 1, 2)))
console.log(checkDay(new Date(2000, 29, 2)))