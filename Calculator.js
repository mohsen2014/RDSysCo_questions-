class Calculator {

  constructor() {
    // this.undoCommand = false;
    this.current = 0;
    this.stack = [];
  }

  _sub(x, y) {
     return x - y; 
  }
  _div(x, y) {
     return x / y; 
  }
  _mul(x, y) {
     return x * y; 
  }
  _add(x, y) { 
    return x + y; 
  }

  add(value) {
    return new runOprator(_add, _sub, value);
  };

  sub(value) {
    return new runOprator(_sub, _add, value);
  };

  mul(value) {
    return new runOprator(_mul, _div, value);
  };

  div(value) {
    return new runOprator(_div, _mul, value);
  };

  run(oprator) {
    current = oprator.get().run(current, oprator.value);
    stack.push(oprator);
  }

  undo(){
    let oprator = stack.pop();
    oprator.get().undo(current ,oprator.value)
  }

  getCurrentValue(){
    return current;
  }
}


class runOprator {
  constractor(opr, undo, value){
    this.opr = opr;
    this.undo = undo;
    this.value = value;
  }
  
  get(){
    return {
      run : run,
      undo : undo,
      value : value
    }
  }
}