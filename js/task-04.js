class StringBuilder {
  constructor(mainStr) {
    this._value = mainStr;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this.value;
  }

  pad(str) {
    this._value = str + this.value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
