import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import useImageUploader2 from './use-image-uploader-2';

import './image-uploader-2.scss';

const ImageUploader2 = () => {
  const { handleChangeStatus } = useImageUploader2();

  return (
    <div className="image-uploader">
      <Dropzone
        accept="image/*"
        onChangeStatus={handleChangeStatus}
        inputContent="Drop images or click to browse"
        submitButtonContent="Upload"
        maxSizeBytes={5000000}
        styles={{
          dropzone: { minHeight: 200, maxHeight: 250 },
          inputLabel: { color: 'black' },
        }}
      />
    </div>
  );
};

export default ImageUploader2;
