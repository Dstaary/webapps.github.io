const dystans = document.querySelector('input.dystans');
const spalanie = document.querySelector('input.spalanie');
const cenaPaliwa = document.querySelector('input.CenaPaliwa');
const iloscOsob = document.querySelector('input.IloscOsob');

const spanSpalanie = document.getElementById("spalanieScore");
const spanOsoby = document.getElementById("osoby");
const spanKoszt = document.getElementById("koszt");
const spanZrzutka = document.getElementById("zrzutka");

document.getElementById('fuelBtn').addEventListener("click", () => {
    const fuelL = (dystans.value * spalanie.value) / 100;

    const fuelScore = fuelL * cenaPaliwa.value;
    
    const zrzutka = fuelScore / iloscOsob.value;

    spanSpalanie.textContent = spalanie.value;
    spanOsoby.textContent = iloscOsob.value;
    spanKoszt.textContent = fuelScore.toFixed(2);
    spanZrzutka.textContent = zrzutka.toFixed(2);

})



