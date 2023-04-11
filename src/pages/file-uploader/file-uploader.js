import React from 'react';
import useUploadFile from './use-file-uploader';
import './file-uploader.scss';

const FileUploader = () => {
  const { isDragActive, getInputProps, getRootProps } = useUploadFile();

  return (
    <div {...getRootProps()} className="file-uploadere">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileUploader;

// Здесь мы используем хук useDropzone из react-dropzone для создания зоны для загрузки файлов.
// Мы передаем обработчик onDrop в useDropzone, который вызывается при загрузке файлов.

// Затем мы используем функцию getRootProps для получения свойств, необходимых для корневого элемента зоны загрузки, и передаем ее в div элемент.
// Мы также используем функцию getInputProps для получения свойств, необходимых для элемента input, который отвечает за выбор файла.

// Мы также проверяем, является ли пользователь в настоящее время перетаскиваемым файла над зоной загрузки, с помощью переменной isDragActive.
