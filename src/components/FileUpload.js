import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      setError('');
      onFileUpload(selectedFile); // Pass the file to the parent component
    } else {
      setError('Please upload a valid CSV file.');
    }
  };

  return (
    <div className="file-upload">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FileUpload;