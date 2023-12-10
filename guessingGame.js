const userGeessNumber = document.querySelector(".input-filed");
const showMassage = document.querySelector(".massage-para");
const showWonVlaue = document.querySelector(".show-won");
const showLossVlaue = document.querySelector(".show-loss");
const runBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
let wonTotal = 0;
let lossTotal = 0;
let count = 0;

resetBtn.addEventListener("click", () => {
  location.reload();
});

runBtn.addEventListener("click", (e) => {
  count++;
  let randomValue = Math.floor(Math.random() * 5 + 1);
  let userValue = parseInt(userGeessNumber.value);
  if (userValue > 5 || userValue < 1) {
    showMassage.innerHTML = " Give a number between 5 and 1";
    count--;
  } else if (userValue > randomValue || randomValue > userValue) {
    lossTotal++;
    showMassage.innerHTML = `You guessed wrong number was ${randomValue}`;
    showLossVlaue.innerHTML = `You Loss = ${lossTotal}`;
  } else if (randomValue == userValue) {
    wonTotal++;
    showMassage.innerHTML = `Your guess is correct The number was ${randomValue}`;
    showWonVlaue.innerHTML = `You Won = ${wonTotal}`;
  } else {
    count--;
    showMassage.innerHTML = "Please enter the number";
  }

  userGeessNumber.value = "";
  if (count >= 5) {
    runBtn.disabled = true;
    setTimeout(() => {
      showMassage.innerHTML = " After 5 times you start again ";
    }, 3000);
  }
});
