module.exports = function getZerosCount(number, base) {
  let counter = 0;




  let countTwo = 0;
  let countFive = 0;
  let countS = 0;
  let countSev = 0;
  let countEl = 0;
  let countT = 0;
  let countThirtheen = 0;
  let countnineteen = 0;

  let div = base;

  while(div % 19 === 0){
    countnineteen++;
    div = div / 19;
  }

  while(div % 17 === 0){
    countSev++;
    div = div / 17;
  }

  while(div % 13 === 0){
    countThirtheen++;
    div = div / 13;
  }

  while(div % 11 === 0){
    countEl++;
    div = div / 11;
  }

  while(div % 7 === 0){
    countS++;
    div = div / 7;
  }


  while(div % 5 === 0){
    countFive++;
    div = div / 5;
  }

  while(div % 3 === 0){
    countT++;
    div = div / 3;
  }


  while(div % 2 === 0){
    countTwo++;
    div = div / 2;
  }


  if (div === 1){

    if (countTwo > 0){div = 2};
    if (countT > 0 && countT + 2 >= countTwo){div = 3};
    if (countFive > 0 && countFive + 2 >= countTwo){div = 5};
    if (countS > 0){div = 7};
    if (countEl > 0){div = 11};
    if (countThirtheen > 0){div = 13};
    if (countSev > 0){div = 17};
    if (countnineteen > 0){div = 19};
  }


  for (let i = div; i <= number; i += div){
    let elem = i;
    while(elem % div === 0){
      counter++;
      elem = elem / div;
    }
  }

  if (div !== 19 && div !== 13 && div !== 17 && div !== 11 && div !== 7 && div !== 3 && div !== 5 && div !== 2) return Math.trunc(counter);
  if (div === 19) return Math.trunc(counter / countnineteen);
  if (div === 17) return Math.trunc(counter / countSev);
  if (div === 13) return Math.trunc(counter / countThirtheen);
  if (div === 11) return Math.trunc(counter / countEl);
  if (div === 7) return Math.trunc(counter / countS);
  if (div === 7) return Math.trunc(counter / countS);
  if (div === 3) return Math.trunc(counter / countT);
  return (div === 5) ? Math.trunc(counter / countFive) : Math.trunc(counter / countTwo);
}