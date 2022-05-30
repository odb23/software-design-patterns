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
    this.history = []
  }

  executeCommand (command) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo () {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }

}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

// Chaining commands classes into a class
class AddThenMultiplyCommand {

  constructor(valueToAdd, valueToMultiply) {
    this.addCommand = new AddCommand(valueToAdd)
    this.multiplyCommand = new MultiplyCommand(valueToMultiply)
  }

  execute (currentValue) {
    const newValue = this.addCommand.execute(currentValue)
    return this.multiplyCommand.execute(newValue)
  }

  undo (currentValue) {
    const newValue= this.multiplyCommand.undo(currentValue)
    return this.addCommand.undo(newValue)
  }
}
