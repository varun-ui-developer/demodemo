import React, { useState } from "react";

const ImageUploadForm = () => {
  const [image, setImage] = useState(null); // For storing the uploaded image
  const [imagePreview, setImagePreview] = useState(null); // For storing the preview URL

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      setImage(file); // Store the file in state
      setImagePreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      alert(`Image "${image.name}" is ready to be uploaded.`);
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Upload and Preview Image</h2>
      <form onSubmit={handleSubmit}>
        {/* Image Upload Input */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            Choose an Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "block", margin: "10px auto" }}
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* Image Preview */}
      {imagePreview && (
        <div style={{ marginTop: "20px" }}>
          <h3>Image Preview:</h3>
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
