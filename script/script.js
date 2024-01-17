console.log(`Funguje!`);

// 12. Zapojení prvků náhody pomocí matematických funkcí
const randomNumber = Math.floor(Math.random() * 100) + 1;
window.alert(`Náhodné číslo: ${randomNumber}`);

// 13. Zacyklení událostí na základě daného počtu kroků
const steps = 5; // Počet kroků
for (let i = 0; i < steps; i++) {
    window.alert(`Krok číslo: ${i + 1}`);
}

// 14. Zacyklení událostí na základě výstupní podmínky
let count = 0;
const maxCount = 3;
while (count < maxCount) {
   window.alert(`Stále podmínka: ${count}`);
    count++;
}

// 15. Ladění vstupů uživatele (zjednodušení kontroly)
function checkAge(age) {
    const MINIMUM = 15;

    if (Number(age) === MINIMUM) {
        return `Je ti minimální povolený věk, lucky.. Vítej!`;
    } else if (Number(age) > MINIMUM) {
        return `Můžeš na web moreee, je ti o ${age - MINIMUM} víc než ${MINIMUM} let yoloooo!`;
    } else {
        if (!isNaN(age)) {
            return `Do dosažení povoleného věku ti zbývá ${MINIMUM - age} yrs!!11`;
        } else {
            return `Tohle neni číslo!`;
        }
    }
}

const vekUzivatele = window.prompt('Kolik ti je let?', 69);
const message = checkAge(vekUzivatele);
window.alert(message);

// 16. Rozšíření vybraných proměnných na pole
const creators = ['Džon', 'Advy', 'Dejvis'];
window.alert(`Tvůrci: ${creators.join(', ')}`);

console.log(`Rare jako supreme drop`);
const studenti = ['Anna', 'Kateřina', 'Marie', 'Pepa'];
studenti.forEach(element => {
  studenti[studenti.indexOf(element)] = element.substring(0, 3) + 'ítko';
});
let vybraniStudenti = [];

do {
  const los = Math.floor(Math.random() * studenti.length);
  const vybranyStudent = studenti[los];
  if (!vybraniStudenti.includes(vybranyStudent)) {
    window.alert(`Dnešním mazánkem je: ${vybranyStudent}`);
    vybraniStudenti.push(vybranyStudent);
  }
} while (vybraniStudenti.length < 3);
window.alert(`Dnešní mazánci jsou: ${vybraniStudenti.join(', ')}.`);
