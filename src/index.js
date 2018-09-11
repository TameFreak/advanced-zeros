module.exports = function getZerosCount(number, base) {
  let counter = 0;


  let countTwo = 0;
  let countFive = 0;

  let div = base;
  while(div % 5 === 0){
    countFive++;
    div = div / 5;
  }

  while(div % 2 === 0){
    countTwo++;
    div = div / 2;
  }

  div = (div === 1) ? (countFive === 0) ? 2 : 5 : div;

  for (let i = 2; i <= number; i += 1){
    let elem = i;
    while(elem % div === 0){
      counter++;
      elem = elem / div;
    }
  }

  if (div !== 5 && div !== 2) return Math.trunc(counter);
  return (div === 5) ? Math.trunc(counter / countFive) : Math.trunc(counter / countTwo);
}