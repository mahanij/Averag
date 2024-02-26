let n = Number(prompt("How many lessons do you want to enter?"));
let s = 0;
let j = 0;
for (i = 1; i <= 2; ++i) {
  let numbers = Number(prompt("enter number" + " " + i));
  if (numbers >= 10) {
    s += numbers;
    j += 1;
  }
  else {
    alert("this number is out of rang")
  }
}
alert("average =" + s / j);
