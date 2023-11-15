console.log(`Skéro jak debil`);

const MINIMUM = 100;
const jmenoUzivatele = window.prompt('Jak se jmenujes?', 'Ty magore');
window.alert(`Nazdar Bauchu, ${jmenoUzivatele}!`);
let vekUzivatele = window.prompt('Kdy jsi se narodil?');
console.log(vekUzivatele);

if (Number(vekUzivatele) === MINIMUM) {let vekUzivatele = 2023 - window.prompt(`Je tu tma, rozsviť!`);}
else if (Number(vekUzivatele) > MINIMUM) {
  window.alert(`Dostaneš se na web, když je ti 17let ${vekUzivatele - MINIMUM} víc než minimum (17+) ${MINIMUM} 17let!`);
}else
  if (!isNaN(Number(vekUzivatele))) {window.alert(`Budeš moct dovnitř, jen musíš počkat chvíli a potvrdit svůj minimální věk. ${MINIMUM - vekUzivatele} 17let!`);}
  else {
    window.alert(`${vekUzivatele} Správný věk prosím, na této stránce se nachází citlivý obsah!`); }
  vekUzivatele = window.prompt(`Konečně, dokázal jsi prokázat svůj věk a tím pádem:`);
  if (vekUzivatele >= MINIMUM && vekUzivatele < MAXIMUM) {
  console.log(`vítej příteli`);
}
  else{
    if (!isNaN (vekUzivatele)) {
        window.alert(`daweedek`);
    }
}

window.alert(`, můžeš na web!`);