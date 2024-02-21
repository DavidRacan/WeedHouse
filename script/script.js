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



const creators = ['Džon', 'Advy', 'Dejvis'];
window.alert(`Tvůrci: ${creators.join(', ')}`);

console.log(`Rare jako supreme drop`);


do {
    const los = Math.floor(Math.random() * studenti.length);
    const vybranyStudent = studenti[los];
    if (!vybraniStudenti.includes(vybranyStudent)) {
        window.alert(`Dnešním mazánkem je: ${vybranyStudent}`);
        vybraniStudenti.push(vybranyStudent);
    }
} while (vybraniStudenti.length < 3);

// 16. Rozšíření vybraných proměnných na pole
const data = {
    creators: ['Džon', 'Advy', 'Dejvis'],
    students: ['Anna', 'Kateřina', 'Marie', 'Pepa'],
    selectedStudents: [],
    hodKostkou: function(hody, strany) {
        if (hody >= 1 && (strany === 6 || strany === 20)) {
            let results = [];
            for (let i = 0; i < hody; i++) {
                const result = strany === 6 ? this.hod6() : this.hod20();
                results.push(result);
            }
            return results;
        } else {
            return null;
        }
    },
    hod6: function() {
        return Math.floor(Math.random() * 6 + 1);
    },
    hod20: function() {
        return Math.floor(Math.random() * 20 + 1);
    },
    checkAge: function(age) {
        const MINIMUM = 15;
        if (age >= MINIMUM) {
            return "Jsi dostatečně starý.";
        } else {
            return "Jsi příliš mladý.";
        }
    }
};

// 17. Iterovat skrz pole pomocí metody ForEach
data.students.forEach((student, index) => {
    data.students[index] = student.substring(0, 3) + 'ítko';
});

// 19. Upravit kód tak, aby na vhodných místech pouze volal funkce
const hody = Number(window.prompt('Kolikrát chceš hodit kostkou?'));
const strany = Number(window.prompt('Kolikastěnnou kostkou chceš házet?'));

const results = data.hodKostkou(hody, strany);
if (results !== null) {
    results.forEach(result => {
        window.alert(`Na ${strany}-stěnné kostce padlo číslo ${result}.`);
    });
} else {
    window.alert('Neplatný počet hodů nebo nepodporovaný počet stran');
}

const vekUzivatele = window.prompt('Kolik ti je let?', 69);
const message = data.checkAge(vekUzivatele);
window.alert(message);

// 20. Strukturovat vybraná data do objektu
do {
    const los = Math.floor(Math.random() * data.students.length);
    const vybranyStudent = data.students[los];
    if (!data.selectedStudents.includes(vybranyStudent)) {
        window.alert(`Dnešním mazánkem je: ${vybranyStudent}`);
        data.selectedStudents.push(vybranyStudent);
    }
} while (data.selectedStudents.length < 3);
window.alert(`Dnešním mazánci jsou: ${data.selectedStudents.join(', ')}.`);


window.alert(`Dnešním mazánci jsou: ${vybraniStudenti.join(', ')}.`);
