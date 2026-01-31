import { useNavigate } from "react-router-dom";
import "../styles/portfolio.css";

function Portfolio() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="portfolio-container">
      <div className="header">
        <h2>Chappidi Rohith Reddy</h2>
        <p>
          <strong>Email:</strong> {email}
        </p>

        <div className="links">
          <a
            href="https://github.com/Rohithreddychappidi/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rorc25/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>

      <div className="section">
        <h3>About Me</h3>
        <p>
          AI & Machine Learning undergraduate passionate about building scalable
          applications, intelligent systems, and real-world ML solutions.
          Interested in full-stack development, data modeling, and GenAI systems.
        </p>
      </div>

      <div className="section">
        <h3>Skills</h3>
        <ul>
          <li>Python, Java, MySQL</li>
          <li>HTML, CSS, React, Flask</li>
          <li>Machine Learning, TensorFlow, Gen AI, RAG</li>
          <li>CI/CD, Git, Linux</li>
        </ul>
      </div>

      <div className="section">
        <h3>Experience</h3>
        <p>
          <strong>Data Modeling Engineer</strong> – ASAR IT Technologies Pvt Ltd
        </p>
        <p>
          <em>March 2025 – May 2025</em>
        </p>
        <ul>
          <li>Built regression-based dynamic models for control systems</li>
          <li>Implemented full MPC pipeline with constraint handling</li>
          <li>Worked on industrial automation and optimization problems</li>
        </ul>
      </div>

      <div className="section">
        <h3>Projects</h3>

        <div className="project-card">
          <strong>Desktop Assistant Application</strong>
          <p>
            Python-based virtual assistant supporting voice and text input using
            PyAudio and Speech Recognition.
          </p>
        </div>

        <div className="project-card">
          <strong>Bengaluru House Price Prediction</strong>
          <p>
            Machine learning web app using Linear Regression, Flask backend, and
            HTML/CSS frontend.
          </p>
        </div>

        <div className="project-card">
          <strong>RAG Document Question Answering System</strong>
          <p>
            Flask + LangChain + FAISS with local LLM (Ollama) for offline document
            querying.
          </p>
        </div>
      </div>

      <div className="section">
        <h3>Certifications</h3>
        <ul>
          <li>
            TensorFlow Developer – DeepLearning.AI
            <em> (Jan 2025)</em>
          </li>
          <li>
            Generative AI for Software Developers – IBM
            <em> (Jan 2025)</em>
          </li>
          <li>
            MySQL Database Development Mastery – Udemy
            <em> (Oct 2022)</em>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Education</h3>
        <p>
          <strong>B.Tech – Artificial Intelligence & Machine Learning</strong>
          <br />
          M S Ramaiah University of Applied Sciences, Bengaluru
          <br />
          CGPA: 8.8 (2022–2026)
        </p>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Portfolio;
