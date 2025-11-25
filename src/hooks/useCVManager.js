import { useState, useRef } from "react";
import { FiUpload, FiDownload } from "react-icons/fi";

const CVManager = () => {
  const [cvFile, setCvFile] = useState(null);
  const [cvFileName, setCvFileName] = useState(
    localStorage.getItem("cvFileName") || null
  );
  const fileInputRef = useRef(null);

  // Upload CV
  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("cvFile", reader.result);
        localStorage.setItem("cvFileName", file.name);
        setCvFile(reader.result);
        setCvFileName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a PDF file");
    }
  };

  // Download CV
  const handleCVDownload = () => {
    const storedCV = localStorage.getItem("cvFile");
    const storedFileName = localStorage.getItem("cvFileName");

    if (storedCV) {
      // Download from localStorage
      const link = document.createElement("a");
      link.href = storedCV;
      link.download = storedFileName || "CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Nếu chưa có CV, mở dialog upload
      alert("No CV uploaded yet. Please upload your CV first.");
      fileInputRef.current?.click();
    }
  };

  return {
    cvFile,
    cvFileName,
    handleCVUpload,
    handleCVDownload,
    fileInputRef,
  };
};

export default CVManager;
