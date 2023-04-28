import React from 'react';
import useFileReader from './use-file-reader';
import styled from 'styled-components';

import './file-reader.scss';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 16px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(92, 92, 214, 0.4);
  }
`;

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
          <StyledButton
            onClick={handleCreateFile}
            backgroundColor="#5c5cd6"
            color="#fff"
            hoverBackgroundColor="#4343c3"
          >
            Create File
          </StyledButton>
          <StyledButton
            onClick={handleReadFile}
            backgroundColor="#5c5cd6"
            color="#fff"
            hoverBackgroundColor="#4343c3"
          >
            Read File
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default FileReader;
