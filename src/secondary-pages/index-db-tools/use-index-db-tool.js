/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { openDB, deleteDB } from 'idb';

const useIndexDBTool = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    // Open a connection to the "example-db" database
    const openDatabase = async () => {
      const database = await openDB('example-db', 1, {
        upgrade(db) {
          // Create a "books" object store
          db.createObjectStore('books', {
            keyPath: 'id',
            autoIncrement: true,
          });
        },
      });
      setDb(database);
    };

    openDatabase();
  }, []);

  const addBook = async (title, author) => {
    // Insert a new book into the "books" object store
    const tx = db.transaction('books', 'readwrite');
    const store = tx.objectStore('books');
    const book = { title, author };
    const id = await store.add(book);
    await tx.complete;
    console.log(`Added book with ID ${id}`);
  };

  const getBooks = async () => {
    // Retrieve all books from the "books" object store
    const tx = db.transaction('books', 'readonly');
    const store = tx.objectStore('books');
    const books = await store.getAll();
    await tx.complete;
    console.log(books);
  };

  const deleteDatabase = async () => {
    // we need to refresh page
    // Delete the "example-db" database
    await deleteDB('example-db');
    setDb(null);
  };
  return {
    addBook,
    getBooks,
    deleteDatabase,
  };
};

export default useIndexDBTool;
