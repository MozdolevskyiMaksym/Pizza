/* eslint-disable no-console */
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const useFileUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles: ', acceptedFiles);
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    useFileUploader,
  };
};

export default useFileUploader;
