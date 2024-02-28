let n = Number(prompt("How many lessons do you want to enter?"));
let s = 0;
let j = 0;
for (i = 1; i <= n; ++i) {
  let numbers = Number(prompt("enter number " + i));
  if (numbers >= 0 && numbers <= 20) {
    s += numbers;
    j += 1;
  } else {
    alert("this number is out of rang");
  }
}

alert("average =" + s / j);

if (s / j >= 19) {
  alert("good job your average is high");
} else if (s / j <= 10) {
  alert("your average is very low please try harder");
} else {
  alert("your average is normal");
}
