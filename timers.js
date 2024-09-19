const logCalled = () => {
  console.log("> fui chamada");
};

setTimeout(() => {
  logCalled();
}, 1000);

setTimeout(logCalled, 100);

const intervalId = setInterval(() => {
  console.log("> chamada no intervalo");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
