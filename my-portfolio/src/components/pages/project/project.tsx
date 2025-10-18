import { useNavigate } from "react-router-dom";
import "./project.scss";

export default function Project() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="project-main-div container py-5">
      <div className="row mb-4">
        <span
          className="back-navigation d-flex justify-content-start"
          onClick={() => handleNavigation("/")}
        >
          Back
        </span>
      </div>
      <h2 className="text-center project-title">Projects</h2>
      <div className="underline"></div>

      {/* === Project 1 === */}
      <div className="project-card d-flex flex-column flex-md-row mb-5 shadow-sm">
        <div className="project-text p-4 d-flex flex-column justify-content-center">
          <h4 className="fw-bold mb-3">Smart Logistics Dashboard</h4>
          <p className="text-muted mb-4">
            A web-based analytics dashboard built using React, TypeScript, and
            .NET Core. It visualizes transport and shipment data in real time
            with PostgreSQL as the backend database.
          </p>
          <button className="btn btn-outline-dark w-fit"
          onClick={() => handleNavigation("/project/tms-project")}
          >View Project</button>
        </div>
        <div className="project-image">
          <img
            src="/project-1.png"
            width={100}
            height={10}
            alt="Smart Logistics Dashboard"
          />
        </div>
      </div>

      {/* === Project 2 === */}
      <div className="project-card d-flex flex-column flex-md-row mb-5 shadow-sm reverse">
        <div className="project-image">
          <img src="/project-2.png" alt="AI Document Management System" />
        </div>
        <div className="project-text p-4 d-flex flex-column justify-content-center">
          <h4 className="fw-bold mb-3">AI Document Management System</h4>
          <p className="text-muted mb-4">
            Developed an AI-powered system that automatically reads, classifies,
            and validates uploaded business documents. Built with React,
            Bootstrap, and a .NET backend integrated with OpenAI APIs.
          </p>
          <button className="btn btn-outline-dark w-fit">View Project</button>
        </div>
      </div>
    </div>
  );
}
