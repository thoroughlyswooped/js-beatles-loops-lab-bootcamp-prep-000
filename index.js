// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = {};
  var myString = "";
  for (i = 0; i < musicians.length; i++) {
    myString = musicians[i] + instruments[i];
    newArr.push(myString);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var counter = 0;
  while (index < facts.length) {
    facts[index] = facts[index] + "!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var newArr = {};
  do {
    newArr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArr;
}