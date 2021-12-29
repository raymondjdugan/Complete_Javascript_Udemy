'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const [opt1, opt2, opt3, opt4] = this.options;
    let correctInput = false;

    while (correctInput === false) {
      const answer = prompt(
        `${this.question}\n${opt1}\n${opt2}\n${opt3}\n${opt4}\n(Write option number)`
      );
      const numberInput = parseInt(answer);
      if (
        (!isNaN(numberInput) && numberInput === 0) ||
        numberInput === 1 ||
        numberInput === 2 ||
        numberInput === 3
      ) {
        correctInput = true;
        this.answers[numberInput]++;
      }
    }
    this.displayResults();
  },
  displayResults(type = 'string') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      let str = 'Poll results are ';
      for (const result of this.answers) {
        str += result + ', ';
      }
      console.log(str);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
