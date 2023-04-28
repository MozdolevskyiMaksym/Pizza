// class IndexedDBStorage {
//   constructor(databaseName, storeName) {
//     // Open connection to IndexedDB
//     this.dbPromise = window.indexedDB.open(databaseName);
//     // Define the store name
//     this.storeName = storeName;
//   }

//   async add(data) {
//     const db = await this._getDB();

//     return new Promise((resolve, reject) => {
//       // Create a new transaction and get the object store
//       const transaction = db.transaction([this.storeName], 'readwrite');
//       const store = transaction.objectStore(this.storeName);

//       // Add data to the object store
//       const request = store.add(data);

//       // Handle success and error events
//       request.onsuccess = (event) => {
//         resolve(event.target.result);
//       };

//       request.onerror = (event) => {
//         reject(event.target.error);
//       };
//     });
//   }

//   async get(key) {
//     const db = await this._getDB();

//     return new Promise((resolve, reject) => {
//       // Create a new transaction and get the object store
//       const transaction = db.transaction([this.storeName], 'readonly');
//       const store = transaction.objectStore(this.storeName);

//       // Get data from the object store
//       const request = store.get(key);

//       // Handle success and error events
//       request.onsuccess = (event) => {
//         resolve(event.target.result);
//       };

//       request.onerror = (event) => {
//         reject(event.target.error);
//       };
//     });
//   }

//   async delete(key) {
//     const db = await this._getDB();

//     return new Promise((resolve, reject) => {
//       // Create a new transaction and get the object store
//       const transaction = db.transaction([this.storeName], 'readwrite');
//       const store = transaction.objectStore(this.storeName);

//       // Delete data from the object store
//       const request = store.delete(key);

//       // Handle success and error events
//       request.onsuccess = (event) => {
//         resolve(event.target.result);
//       };

//       request.onerror = (event) => {
//         reject(event.target.error);
//       };
//     });
//   }

//   async _getDB() {
//     return new Promise((resolve, reject) => {
//       // Handle database upgrade events
//       this.dbPromise.onupgradeneeded = (event) => {
//         const db = event.target.result;
//         db.createObjectStore(this.storeName, {
//           keyPath: 'id',
//           autoIncrement: true,
//         });
//       };

//       // Handle success and error events
//       this.dbPromise.onsuccess = (event) => {
//         const db = event.target.result;
//         resolve(db);
//       };

//       this.dbPromise.onerror = (event) => {
//         reject(event.target.error);
//       };
//     });
//   }
// }

class IndexedDBStorage {
  constructor(dbName, storeName) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.db = null;
  }

  // метод для открытия базы данных
  openDatabase() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName);

      request.onerror = () => {
        reject(Error('Failed to open database.')); // Если база данных не удалось открыть или создать, метод выдает ошибку.
      };

      request.onsuccess = () => {
        // Если база данных существует, метод устанавливает свойство db равным результату запроса на открытие базы данных
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        // иначе создает новую базу данных и устанавливает свойство db равным результату запроса на создание базы данных
        this.db = event.target.result;

        // создание хранилища объектов
        const objectStore = this.db.createObjectStore(this.storeName, {
          keyPath: 'id',
        });

        // создание индекса для поиска по имени
        objectStore.createIndex('name', 'name', { unique: false });
      };
    });
  }
  // метод для добавления данных в хранилище
  addToStore(data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite'); // открывает транзакцию на чтение/запись данных
      const objectStore = transaction.objectStore(this.storeName); // создает хранилище объектов

      // добавление данных в хранилище
      const request = objectStore.add(data); // добавляет данные в хранилище

      request.onerror = () => {
        reject(Error('Failed to add data to store.')); // Если данные не удалось добавить в хранилище, метод выдает ошибку.
      };

      request.onsuccess = () => {
        resolve();
      };
    });
  }

  // метод для поиска данных в хранилище по имени
  searchByName(name) {
    // осуществляет поиск данных в хранилище объектов по имени. Имя передается в качестве параметра name
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly'); // открывает транзакцию на чтение данных
      const objectStore = transaction.objectStore(this.storeName); // получает объектное хранилище
      const index = objectStore.index('name'); // создает индекс для поиска по имени

      // поиск данных по имени
      const request = index.getAll(name); // Затем метод ищет все данные в хранилище, у которых значение поля name соответствует переданному параметру name

      request.onerror = () => {
        reject(Error('Failed to search data by name.'));
      };

      request.onsuccess = () => {
        // Если поиск прошел успешно, метод возвращает найденные данные.
        resolve(request.result);
      };
    });
  }
}

export default IndexedDBStorage;
