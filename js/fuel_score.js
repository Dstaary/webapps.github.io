// const dystans = document.querySelector('input.dystans');
// const spalanie = document.querySelector('input.spalanie');
// const cenaPaliwa = document.querySelector('input.CenaPaliwa');
// const iloscOsob = document.querySelector('input.IloscOsob');
// const formLabels = document.querySelectorAll(".check_value");

// document.getElementById('fuelBtn').addEventListener("click", () => {
//     const div = document.querySelector(".fuel_info");
//     const newSpan = document.querySelector(".score");
//     const errorSpan = document.querySelector(".error_msg")

//     const fuelL = (dystans.value * spalanie.value) / 100;

//     const fuelScore = fuelL * cenaPaliwa.value;
    
//     const zrzutka = fuelScore / iloscOsob.value;

//     for (const formLabel of formLabels) {
//         if (!formLabel.value){
//             errorSpan.innerHTML = `<p>Uzupełnij wszystkie pola !</p>`
//             return;
//         } else {
//             errorSpan.innerHTML = ``;
//         }
//     }

//     newSpan.innerHTML = `<p class="score">Przy średnim spalaniu: <b>${spalanie.value}</b>/100 km,<br> koszt podróży dla <b>${iloscOsob.value}</b></span> osób<br> wyniesie: <b>${fuelScore.toFixed(2)}</b> zł.<br> Zrzucacie się po: <b>${zrzutka.toFixed(2)}</b> zł</p>`

//     div.appendChild(newSpan);

// })


const dystans = document.querySelector('input.dystans');
const spalanie = document.querySelector('input.spalanie');
const cenaPaliwa = document.querySelector('input.CenaPaliwa');
const iloscOsob = document.querySelector('input.IloscOsob');
const formLabels = document.querySelectorAll(".check_value");

const form = document.querySelector(".fuel_form");
const newSpan = document.querySelector(".score");
const errorSpan = document.querySelector("span.error")


    form.addEventListener('input', () => {

        for (const formLabel of formLabels) {
            if (!formLabel.value){
                return;
            } else {
                if (parseInt(formLabel.value) < 0 || formLabel.value === "e") {
                    errorSpan.innerHTML = "Niepoprawne dane lub puste pola !";
                    return;
                }  
            }
            newSpan.innerHTML = "";
        }
        
        const fuelL = (dystans.value * spalanie.value) / 100;
        
        const fuelScore = fuelL * cenaPaliwa.value;
        
        const zrzutka = fuelScore / iloscOsob.value;
        
        errorSpan.innerHTML = "";
        newSpan.innerHTML = `<p class="score">Przy średnim spalaniu: <b>${spalanie.value}</b>/100 km,<br> koszt podróży dla <b>${iloscOsob.value}</b></span> osób<br> wyniesie: <b>${fuelScore.toFixed(2)}</b> zł.<br> Zrzucacie się po: <b>${zrzutka.toFixed(2)}</b> zł</p>`
        
})







