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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", text);

    const response = await fetch("https://example.com/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.text();
    setResult(data);
  };


  return (
    <div className="file-uploader">
      <form onSubmit={handleSubmit}>
        <label>
          File:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <label>
          Text:
          <input type="PLM" value={text} onChange={handleTextChange} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
      {result && <div>{result}</div>}
    </div>
  );
}

export default FileUploader;
