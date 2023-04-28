/* eslint-disable no-console */
class File {
  constructor(name, content, type) {
    this.name = name;
    this.content = content;
    this.type = type;
  }

  create() {
    const blob = new Blob([this.content], { type: this.type }); // create() создает Blob объект, который представляет содержимое файл
    const link = document.createElement('a'); // создает ссылку на этот Blob объект
    link.href = URL.createObjectURL(blob); // добавляет атрибуты href и download к ссылке
    link.download = this.name;
    link.click(); // вызывает метод click() на ссылке, что приводит к скачиванию файла
    URL.revokeObjectURL(link.href); // вызывает метод revokeObjectURL() на URL объекте, чтобы освободить ресурсы, связанные с созданной ссылкой
    // указывает браузеру, как уничтожить URL, который передается в него, фактически освобождая память
  }

  read() {
    const content = new Blob([this.content], { type: this.type });
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event.target.result);
    };
    reader.readAsText(content);
  }
}

export default File;
