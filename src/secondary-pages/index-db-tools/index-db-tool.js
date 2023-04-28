/* eslint-disable no-console */
import React from 'react';
import useIndexDBTool from './use-index-db-tool';
import './index-db-tool.scss';

const IndexDBTool = () => {
  const { addBook, getBooks, deleteDatabase } = useIndexDBTool();

  return (
    <div className="indexed-db-container">
      <h2>IndexedDB Example</h2>
      <button
        onClick={() => addBook('The Great Gatsby', 'F. Scott Fitzgerald')}
      >
        Add Book
      </button>
      <button onClick={getBooks}>Get Books</button>
      <button onClick={deleteDatabase}>Delete Database</button>
    </div>
  );
};

export default IndexDBTool;
