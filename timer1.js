const timings = process.argv.splice(2);

const sound = (delay) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay)
};

for (let time of timings) {
  let numberTime = parseFloat(time);
  if (typeof(numberTime) === 'number' && numberTime >= 0) {
    sound(time*1000);
  }
};