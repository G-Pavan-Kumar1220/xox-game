let value = "X";
let Xarr = [];
let Oarr = [];

// Winning combinations (positions on 3x3 grid)
const winningCombos = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

let btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (value === "X") {
      element.innerHTML = '<span class="btn-text X">X</span>';
      element.style.backgroundColor = "yellow";
      Xarr.push(element.value);
      checkWinner("X", Xarr);
      value = "O";
    } else {
      element.innerHTML = '<span class="btn-text O">O</span>';
      element.style.backgroundColor = "orange";
      Oarr.push(element.value);
      checkWinner("O", Oarr);
      value = "X";
    }
    element.disabled = true;
  });
});

// Function to check winner
function checkWinner(player, moves) {
  for (let combo of winningCombos) {
    if (combo.every((val) => moves.includes(val))) {
      setTimeout(() => {
        alert(player + " Wins!");
        reset()
      }, 100);
      disableAll();

      return;
    }
  }

  // Draw check
  if (Xarr.length + Oarr.length === 9) {
    setTimeout(() => {
      alert("It's a Draw!");
      reset()
    }, 100);
  }
}

// Disable all buttons after game over
function disableAll() {
  btn.forEach((b) => (b.clear = true));
}
const reset = () => {
  btn.forEach((b) => {
    b.innerHTML = "";              // Clear inner text (X or O)
    b.style.backgroundColor = "";  // Reset background
    b.disabled = false;            // Enable again
  });

  // Reset variables
  value = "X";
  Xarr = [];
  Oarr = [];
};
