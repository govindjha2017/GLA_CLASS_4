async function asyncFunc() {
  console.log("Async function started");
  return "Async result";
}

asyncFunc().then((result) => {
  console.log(result);
});

console.log("Synchronous log");