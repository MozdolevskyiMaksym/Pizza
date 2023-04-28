import React from 'react';
import useImageUploader from './use-image-uploader';
import './image-uploader.scss';

const ImageUploader = () => {
  const {
    images,
    getRootProps,
    getInputProps,
    isDragActive,
    handleRemoveImage,
  } = useImageUploader();

  return (
    <div {...getRootProps()} className="image-uploader">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the images here...</p>
      ) : (
        <p>Drag `n` drop some images here, or click to select images</p>
      )}
      <div>
        {images.map((image, index) => (
          <React.Fragment key={image}>
            <div key={index}>
              <img
                width={400}
                height={400}
                src={URL.createObjectURL(image)}
                alt=""
              />
            </div>
            <button onClick={(event) => handleRemoveImage(event, index)}>
              Remove
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
