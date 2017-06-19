class Statistics {

  constroctor(candidate, count) {
    this.candidate = candidate;
    this.count = count;
  }

  log(number, verb, pluralModifier) {
    console.log('There ' + verb + ' ' + number + ' ' + this.candidate + ' ' + pluralModifier);
  }

  printGuessStatisticsNoBody() {
    let number = 'no',
      verb = 'are',
      pluralModifier = 's';
    log(number, verb, pluralModifier)
  }

  printGuessStatisticsOnePerson() {
    let number = 'one',
      verb = 'is',
      pluralModifier = '';
    log(number, verb, pluralModifier)
  }

  printGuessStatisticsOneMorePerson(count) {
    let number = count,
      verb = 'are',
      pluralModifier = 's';
    log(number, verb, pluralModifier)
  }
}

const statistics = new Statistics();
statistics.printGuessStatisticsOneMorePerson("bird", 2);
/*
*There are 2 birds
*/
class Calculator{
  add(x, y) { return x + y; }
  sub(x, y) { return x - y; }
   mul(x, y) { return x * y; }
   div(x, y) { return x / y; }

}

var Command = function (execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
}

var AddCommand = function (value) {
  return new Command(add, sub, value);
};

var SubCommand = function (value) {
  return new Command(sub, add, value);
};

var MulCommand = function (value) {
  return new Command(mul, div, value);
};

var DivCommand = function (value) {
  return new Command(div, mul, value);
};

var Calculator = function () {
  var current = 0;
  var commands = [];

  function action(command) {
    var name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      commands.push(command);
      log.add(action(command) + ": " + command.value);
    },

    undo: function () {
      var command = commands.pop();
      current = command.undo(current, command.value);
      log.add("Undo " + action(command) + ": " + command.value);
    },

    getCurrentValue: function () {
      return current;
    }
  }
}

// log helper

var log = (function () {
  var log = "";

  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { alert(log); log = ""; }
  }
})();

function run() {
  var calculator = new Calculator();

  // issue commands

  calculator.execute(new AddCommand(100));
  calculator.execute(new SubCommand(24));
  calculator.execute(new MulCommand(6));
  calculator.execute(new DivCommand(2));

  // reverse last two commands

  calculator.undo();
  calculator.undo();

  log.add("\nValue: " + calculator.getCurrentValue());
  log.show();
}