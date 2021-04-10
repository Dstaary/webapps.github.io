const dystans = document.querySelector('input.dystans');
const spalanie = document.querySelector('input.spalanie');
const cenaPaliwa = document.querySelector('input.CenaPaliwa');
const iloscOsob = document.querySelector('input.IloscOsob');
const formLabels = document.querySelectorAll(".check_value");
const sumBtn = document.querySelector(".sumButton");

const form = document.querySelector(".fuel_form");
const newSpan = document.querySelector(".score");
const errorSpan = document.querySelector("span.error")


sumBtn.addEventListener('click', () => {

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
        let allOptionsCost = 0;
        for(let i = 0; i<optionCostList.length; i++) {
            allOptionsCost = allOptionsCost + optionCostList[i]*1;
        }
        
        const fuelL = (dystans.value * spalanie.value) / 100;
        
        const fuelScore = fuelL * cenaPaliwa.value;

        const costScore = fuelScore + allOptionsCost;
        
        const zrzutka = (fuelScore + allOptionsCost) / iloscOsob.value;
        
        errorSpan.innerHTML = "";
        newSpan.innerHTML = `<p class="score">Przy średnim spalaniu: <b>${spalanie.value}</b>/100 km, koszt podróży dla <b>${iloscOsob.value}</b></span> osób<br> wyniesie: <b>${fuelScore.toFixed(2)}</b> zł. Po doliczeniu dodatkowych <b>${allOptionsCost}</b>zł kosztów. </br> Zrzucacie się po: <b>${zrzutka.toFixed(2)}</b> zł</p>`
        
})







