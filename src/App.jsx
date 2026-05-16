import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const resumeRef = useRef();

  async function downloadPDF() {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight);
    const pdfBlob = pdf.output("bloburl");
    window.open(pdfBlob, "_blank");
  }
  return (
    <>
      <Navbar
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        downloadPDF={downloadPDF}
      />
      <Sidebar
        showSidebar={showSidebar}
        downloadPDF={downloadPDF}
        resumeRef={resumeRef}
      />
    </>
  );
}

export default App;
