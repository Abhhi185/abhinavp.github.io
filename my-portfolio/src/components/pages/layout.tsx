import { useNavigate } from "react-router-dom";
import "./layout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolderOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="layout-main-div">
      <div className="layout-intenral-div">
        <div className="layout-internal-child-div">
          <div className="row align-items-center">
            {/* LEFT SECTION */}
            <div className="col-md-7 text-start">
              <h6 className="text-warning">
                Full-Stack .NET & React Developer
              </h6>
              <h1>
                Hello, <br /> my name is <span>Abhinav Reddy Pagadala</span>
              </h1>
              <span className="description">
                I'm a Full-Stack .NET Developer who enjoys turning ideas into
                functional, elegant web applications. Skilled in C#, ASP.NET
                Core, React, and SQL Server/PostgreSQL — I focus on building
                efficient, user-friendly solutions with clean and maintainable
                code.
              </span>
              <div className="buttons">
                <button
                  className="btn btn-warning me-3"
                  onClick={() => handleNavigation("/project")}
                >
                  Projects
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/YOUR-LINKEDIN",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </button>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="col-md-5 position-relative">
              <div className="col-8 mb-2 d-flex text-center justify-content-end gap-4">
                <span
                  className="text-link"
                  onClick={() => handleNavigation("/about")}
                >
                  <FontAwesomeIcon icon={faUser} />
                  About
                </span>
                <span
                  className="text-link"
                  onClick={() => handleNavigation("/project")}
                >
                  <FontAwesomeIcon icon={faFolderOpen} />
                  Projects
                </span>
                <span
                  className="text-link"
                  onClick={() => handleNavigation("/contact")}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Contact
                </span>
              </div>

              <div className="wave-background"></div>
              <img src="/coverImg.jfif" alt="profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
