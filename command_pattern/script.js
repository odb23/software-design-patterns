// In object-oriented programming, the command pattern is a
//  behavioral design pattern in which an object is used to 
//  encapsulate all information needed to perform an action 
//  or trigger an event at a later time. This information 
//  includes the method name, the object that owns the method 
//  and values for the method parameters. it also supports
// the undo and redo operations

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(valueToAdd) {
    this.value = this.value + valueToAdd;
  }

  subtract(valueToSubtract) {
    this.value -= valueToSubtract;
  }

  divide(valueToDivide) {
    this.value /= valueToDivide;
  }

  multiply(valueToMultiply) {
    this.value *= valueToMultiply;
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo() {
    return currentValue - this.valueToAdd;
  }
}

const addCommand = new AddCommand(10);
const newValue = addCommand.execute(10);
console.log(newValue);
console.log(addCommand.undo(newValue));
