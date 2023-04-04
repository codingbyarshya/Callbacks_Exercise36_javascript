const printHello = () => console.log("Hello");
const repeatHello = (callback) => {
   const helloIntervalId = setInterval(() => callback(), 1000);
   setTimeout(() => clearInterval(helloIntervalId), 5000);
};

repeatHello(printHello);