import { useState } from 'react';
import File from '../../utils/file-reader';

const useFileReader = () => {
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [fileType, setFileType] = useState(''); // application/pdf, "image/png", "image/jpeg", "image/gif"

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fileName':
        setFileName(value);
        break;
      case 'fileContent':
        setFileContent(value);
        break;
      case 'fileType':
        setFileType(value);
        break;
      default:
        break;
    }
  };

  const handleCreateFile = () => {
    const file = new File(fileName, fileContent, fileType);
    file.create();
  };

  const handleReadFile = () => {
    const file = new File(fileName, fileContent, fileType);
    file.read();
  };

  return {
    fileType,
    fileName,
    fileContent,
    handleCreateFile,
    handleReadFile,
    handleInputChange,
  };
};

export default useFileReader;
