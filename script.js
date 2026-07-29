let count = 1;

let interval = setInterval(function () {
  console.log(count);
  count++;

  if (count > 20) {
    clearInterval(interval);
  }
}, 800);

setTimeout(function () {
  console.log("all done");
}, 25000);