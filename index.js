// Code your solutions in this file

function writeCards(namesArray, event) {
    const messages = [];
    for (let i = 0; i < namesArray.length; i++) {
      messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  

  function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  module.exports = { writeCards, countDown };
  


