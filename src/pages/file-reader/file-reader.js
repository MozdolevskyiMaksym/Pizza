import React from 'react';
import useFileReader from './use-file-reader';

import './file-reader.scss';

const FileReader = () => {
  const {
    fileType,
    fileName,
    fileContent,
    handleCreateFile,
    handleReadFile,
    handleInputChange,
  } = useFileReader();

  return (
    <div className="file-component">
      <h2>Create and Read Files</h2>
      <div className="file-form">
        <label>
          File Name:
          <input
            name="fileName"
            type="text"
            value={fileName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          File Content:
          <textarea
            name="fileContent"
            value={fileContent}
            onChange={handleInputChange}
          />
        </label>
        <label>
          File Type:
          <input
            name="fileType"
            type="text"
            value={fileType}
            onChange={handleInputChange}
          />
        </label>
        <div className="button-group">
          <button onClick={handleCreateFile}>Create File</button>
          <button onClick={handleReadFile}>Read File</button>
        </div>
      </div>
    </div>
  );
};

export default FileReader;
