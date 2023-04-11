/* eslint-disable no-console */
const useImageUploader2 = () => {
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
    if (status === 'done') {
      console.log(`File ${meta.name} uploaded successfully!`);
    } else if (status === 'error_upload_params' || status === 'error_upload') {
      console.error(`Failed to upload ${meta.name}.`);
    }
  };

  return { handleChangeStatus };
};

export default useImageUploader2;
