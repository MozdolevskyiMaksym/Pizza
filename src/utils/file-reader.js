/* eslint-disable no-console */
class File {
  constructor(name, content, type) {
    this.name = name;
    this.content = content;
    this.type = type;
  }

  create() {
    const blob = new Blob([this.content], { type: this.type });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = this.name;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  read() {
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event.target.result);
    };
    reader.readAsText(this.content);
  }
}

export default File;
