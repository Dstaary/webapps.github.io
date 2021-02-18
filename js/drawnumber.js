const firstNumber = document.querySelector("input.startnumber");
const lastNumber = document.querySelector("input.lastnumber");
const scoreNumber = document.querySelector("span.number");
const formDraw = document.querySelector(".draw_form");
const drawChecks = document.querySelectorAll("input.drawcheck");

const drawclick = (e) => {
    e.preventDefault();
    for (const drawCheck of drawChecks) {
        if (drawCheck.value < 0 || drawCheck.value === "e" || drawCheck.value === "") {
            scoreNumber.innerHTML = `<p>Niepoprawne dane lub puste pola !</p>`;
            return;
        } else if (parseInt(firstNumber.value) >= parseInt(lastNumber.value)) {
            scoreNumber.innerHTML = "<p>Pierwsza liczba jest wieksza niż druga !</p>";
            return;
        } else {
            let drawNumber = (x, y) => Math.floor(Math.random() * (x - y) +1 + y);
            scoreNumber.innerHTML = `<p>Wylosowana liczba to: ${drawNumber(parseInt(firstNumber.value), parseInt(lastNumber.value))}</p>`
        }
    }
}

document.querySelector("button.drawNumber_btn").addEventListener("click", drawclick);
