import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadComponent = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploadComponent;
