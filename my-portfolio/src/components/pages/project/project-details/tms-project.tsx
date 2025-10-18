import { useNavigate } from "react-router-dom";
import "./tms-project.scss";

export default function TmsProject() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="project-details container py-5">
      {/* Back Navigation */}
      <div className="row mb-4">
        <span
          className="back-navigation d-flex justify-content-start"
          onClick={() => handleNavigation("/project")}
        >
          ← Back to Projects
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center project-title mb-3">
        Transport Management System (TMS)
      </h2>
      <div className="underline mb-5"></div>

      {/* Description Section */}
      <div className="project-content d-flex flex-column flex-md-row align-items-center mb-5">
        <div className="project-image mb-4 mb-md-0 me-md-5">
          <img
            src="/project-1.png"
            alt="TMS Dashboard"
            className="img-fluid rounded-3 shadow-sm"
          />
        </div>
        <div className="project-text">
          <p className="text-muted fs-5">
            I worked on a <strong>Transport Management System (TMS)</strong> for
            a 3PL logistics platform that helps manage transportation operations
            efficiently. The system handles entities such as{" "}
            <strong>carriers</strong>, <strong>bill-to accounts</strong>,{" "}
            <strong>customers</strong>, <strong>tenants</strong>,{" "}
            <strong>accounts</strong>, and <strong>logistic plans</strong>.
          </p>
          <p className="text-muted fs-5">
            My primary role was as a <strong>.NET Full Stack Developer</strong>.
            I contributed to the development of major modules including:
          </p>
          <ul className="text-muted fs-6">
            <li>Product Management</li>
            <li>Contract Management</li>
            <li>Rating and Pricing Modules</li>
            <li>End-to-End Order Flow (from placement to delivery)</li>
            <li>Order Tracking and Tendering</li>
            <li>Exception Handling and Resolution</li>
          </ul>
          <p className="text-muted fs-5">
            I developed multiple frontend screens in React and Bootstrap, and
            implemented backend services using <strong>.NET Core</strong> and{" "}
            <strong>PostgreSQL</strong>. The architecture followed a clean
            domain-driven approach with event sourcing for tracking state
            changes.
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack my-5">
        <h4 className="fw-bold mb-3">Tech Stack</h4>
        <ul className="text-muted fs-6">
          <li>Frontend: React, TypeScript, Bootstrap</li>
          <li>Backend: .NET Core, C#, Marten (Event Sourcing), PostgreSQL</li>
          <li>Other Tools: AutoMapper, Swagger, OpenAI Integration</li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn btn-outline-dark px-4"
          onClick={() => handleNavigation("/project")}
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
}
