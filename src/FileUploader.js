import React, { useState } from "react";
import "./FileUploader.css";
function FileUploader() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const getNumNewlines = (text) => {
    return (text.match(/\n/g) || []).length;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", text);

    const response = await fetch("https://90a90b38-b769-4d99-9e2f-254670bda4c0.mock.pstmn.io/test", {
      method: "POST",
      body: formData,
    });

    const data = await response.text();
    setResult(data);
  };


  return (
    <div className="file-uploader">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file-input">File:</label>
          <input id="file-input" type="file" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">PLM:</label>
          <input
            id="text-input"
            type="text"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {result && (
        <textarea
          className="result"
          value={result}
          onChange={handleTextChange}
          style={{ height: `${getNumNewlines(result) * 1000}px` }}
        />
      )}
    </div>
  );
}

export default FileUploader;
