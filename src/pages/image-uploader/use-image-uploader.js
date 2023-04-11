import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const useImageUploader = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemoveImage = (event, index) => {
    event.stopPropagation();
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return {
    images,
    getRootProps,
    getInputProps,
    isDragActive,
    handleRemoveImage,
  };
};

export default useImageUploader;
