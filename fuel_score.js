const dystans = document.querySelector('input.dystans');
const spalanie = document.querySelector('input.spalanie');
const cenaPaliwa = document.querySelector('input.CenaPaliwa');
const iloscOsob = document.querySelector('input.IloscOsob');
const formLabels = document.querySelectorAll(".check_value");

const form = document.querySelector(".fuel_form");
const newSpan = document.querySelector(".score");

form.addEventListener('input', () => {

        for (const formLabel of formLabels) {
            if (!formLabel.value){
                return;
            } else {
                if (formLabel.value < 0 || formLabel.value === "e") {
                    newSpan.innerHTML = `<span class="error">Niepoprawne dane lub puste pola !</span>`;
                    return;
                }
                newSpan.innerHTML = "";       
            }
        }

const fuelL = (dystans.value * spalanie.value) / 100;

const fuelScore = fuelL * cenaPaliwa.value;

const zrzutka = fuelScore / iloscOsob.value;

newSpan.innerHTML = `<p class="score">Przy średnim spalaniu: <b>${spalanie.value}</b>/100 km,<br> koszt podróży dla <b>${iloscOsob.value}</b></span> osób<br> wyniesie: <b>${fuelScore.toFixed(2)}</b> zł.<br> Zrzucacie się po: <b>${zrzutka.toFixed(2)}</b> zł</p>`
})

