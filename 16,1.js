let time = document.querySelector("#time");
let submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let minutesTime = time.value;

    let counter = minutesTime * 60;

    if (minutesTime = ""||minutesTime == 0) {
        alert("Введіть кількість хвилин!");
    }

    let timeInterval = setInterval(() => {
        counter--;
        let minutes = Math.floor(counter/60);
        let seconds = counter % 60;
        document.querySelector(".timer").textContent = minutes + ":" + seconds;
        if (counter == 0) {
            clearInterval(timeInterval);
            submit.disabled = false;
        }
    }, 1000);
})