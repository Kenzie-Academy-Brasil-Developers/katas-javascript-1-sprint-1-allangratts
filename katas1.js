function oneThroughTwenty() {
  
  let nfinal = []
  for (let n = 1; n <= 20; n++){
    console.log(n);
    nfinal.push (n);
    
  }

  return nfinal;

}

console.log (oneThroughTwenty ())

function evensToTwenty() {
  let nfinal = []
  for (let n = 2; n <= 20; n += 2){
    console.log(n);
    nfinal.push (n);
    
  }

  return nfinal;
}

console.log (evensToTwenty ())

function oddsToTwenty() {
  let nfinal = []
  for (let n = 1; n <= 20; n += 2){
    console.log(n);
    nfinal.push (n);
    
  }

  return nfinal;
}

console.log (oddsToTwenty ())

function multiplesOfFive() {
  let nfinal = []
  for (let n = 5; n <= 100; n ++){
    if (n % 5 == 0) {
      console.log(n);
      nfinal.push (n);
    
    }
    
  }

  return nfinal;
  
}

console.log (multiplesOfFive())

function squareNumbers() {
  let nfinal = []
  for (let n = 1; n <= 10; n ++){
    console.log(n * n);
    nfinal.push (n * n);
    
  }

  return nfinal;
    
}

console.log (squareNumbers())

function countingBackwards() {
  let nfinal = []
  for (let n = 20; n >= 1; n--){
    console.log(n);
    nfinal.push (n);
    
  }

  return nfinal;
}

console.log (countingBackwards())

function evenNumbersBackwards() {
  let nfinal = []
  for (let n = 20; n >= 2; n -= 2){
    console.log(n);
    nfinal.push (n);
    
  }

  return nfinal;
}

console.log (evenNumbersBackwards())

function oddNumbersBackwards() {
  let nfinal = []
  for (let n = 19; n >= 1; n -= 2){
    console.log(n);
    nfinal.push (n);
    
  }

  return nfinal;
}

console.log (oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let nfinal = []
  for (let n = 100; n >= 5; n--){
    if (n % 5 == 0) {
      console.log(n);
      nfinal.push (n);
    
    }
    
  }

  return nfinal;
}

console.log (multiplesOfFiveBackwards())


function squareNumbersBackwards() {
  let nfinal = []
  for (let n = 10; n >= 1; n --){
    
    console.log(n * n);
    nfinal.push (n * n);
  }

  return nfinal;
}

console.log (squareNumbersBackwards())

