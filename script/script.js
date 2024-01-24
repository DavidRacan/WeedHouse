console.log(`Funguje!`);

const hod6 = () => {
    return Math.floor(Math.random() * 6 + 1);
}

const hod20 = () => {
    return Math.floor(Math.random() * 20 + 1);
}

const randomNumber = Math.floor(Math.random() * 100) + 1;
window.alert(`Náhodné číslo: ${randomNumber}`);

const steps = 5;
for (let i = 0; i < steps; i++) {
    window.alert(`Krok číslo: ${i + 1}`);
}

let count = 0;
const maxCount = 3;
while (count < maxCount) {
    window.alert(`Stále podmínka: ${count}`);
    count++;
}

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

const creators = ['Džon', 'Advy', 'Dejvis'];
window.alert(`Tvůrci: ${creators.join(', ')}`);

console.log(`Rare jako supreme drop`);
const studenti = ['Anna', 'Kateřina', 'Marie', 'Pepa'];
studenti.forEach(element => {
    studenti[studenti.indexOf(element)] = element.substring(0, 3) + 'ítko';
});
let vybraniStudenti = [];

const hody = Number(window.prompt('Kolikrát chceš hodit kostkou?'));
const strany = Number(window.prompt('Kolikastěnnou kostkou chceš házet?'));

if (hody >= 1 && (strany === 6 || strany === 20)) {
    // Volba 6stěnné kostky
    if (strany === 6) {
        for (let i = 0; i < hody; i++) {
            const vysledek = hod6();
            window.alert(`Na 6stěnné kostce padlo číslo ${vysledek}.`);
        }
    }
    // Volba 20stěnné kostky
    else if (strany === 20) {
        for (let i = 0; i < hody; i++) {
            const vysledek = hod20();
            window.alert(`Na 20stěnné kostce padlo číslo ${vysledek}.`);
        }
    }
} else {
    window.alert('Neplatný počet hodů nebo nepodporovaný počet stran');
}

do {
    const los = Math.floor(Math.random() * studenti.length);
    const vybranyStudent = studenti[los];
    if (!vybraniStudenti.includes(vybranyStudent)) {
        window.alert(`Dnešním mazánkem je: ${vybranyStudent}`);
        vybraniStudenti.push(vybranyStudent);
    }
} while (vybraniStudenti.length < 3);

window.alert(`Dnešním mazánci jsou: ${vybraniStudenti.join(', ')}.`);
