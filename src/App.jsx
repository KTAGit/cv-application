import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Sidebar showSidebar={showSidebar} />
    </>
  );
}

export default App;
