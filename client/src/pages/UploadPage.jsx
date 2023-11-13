// /client/src/pages/UploadPage.jsx

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [department, setDepartment] = useState("finance"); // Default department

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("report", file);

      // Append department to form data
      formData.append("department", department);

      // To the actual URL where your server is running
      await axios.post(
        `http://localhost:5000/api/upload/${department}`,
        formData
      );

      // Display success toast
      toast.success("Report uploaded successfully!", {
        position: "bottom-right",
      });

      // Optionally, you can redirect to the reports page or perform other actions
    } catch (error) {
      console.error("Error uploading report:", error);

      // Display error toast
      toast.error("Error uploading report. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div>
      <h2>Upload Page</h2>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          File:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <label>
          Department:
          <select value={department} onChange={handleDepartmentChange}>
            <option value="finance">Finance</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            {/* Add more departments as needed */}
          </select>
        </label>
        <br />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
