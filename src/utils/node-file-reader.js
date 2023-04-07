/* eslint-disable no-console */
const fs = require('fs');

class File {
  constructor(name, content, type) {
    this.name = name;
    this.content = content;
    this.type = type;
  }

  create() {
    fs.writeFileSync(this.name, this.content);
  }

  read() {
    const content = fs.readFileSync(this.name, 'utf-8');
    console.log(content);
  }
}

export default File;
