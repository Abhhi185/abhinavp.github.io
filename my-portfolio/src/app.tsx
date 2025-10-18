import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/pages/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const About = React.lazy(() => import("./components/pages/about/about"));
  const Projects = React.lazy(
    () => import("./components/pages/project/project")
  );
  const Contacts = React.lazy(
    () => import("./components/pages/contacts/contacts")
  );
  const TmsProject = React.lazy(
    () => import("./components/pages/project/project-details/tms-project")
  );

  return (
    <BrowserRouter>
      <div className="App">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />{" "}
            {/* ✅ fixed path */}
            <Route path="/contact" element={<Contacts />} />{" "}
            {/* ✅ fixed path */}
            <Route path="/project/tms-project" element={<TmsProject />} />{" "}
            {/* ✅ fixed path */}
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
