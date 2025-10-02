let values = []

function generateValues() {
  for (i=0; i<=100; i++) {
    values.push(Math.ceil(Math.random() * (1000-1) + 1));
  }
}


function findHighest(values) {
  let highest = 0
  values.forEach(value => {
    if (value > highest) {
      highest = value;
    }
    document.getElementById("output").innerHTML = `Highest value is ${highest}`;
  });
}

document.getElementById("btnFindMax").addEventListener("click", () => {
  values = [];
  generateValues();
  findHighest(values);
});
