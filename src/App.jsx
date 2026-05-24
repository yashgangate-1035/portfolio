function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          backgroundColor: "#111827",
          position: "sticky",
          top: 0,
        }}
      >
        <h2 style={{ color: "#38bdf8" }}>Yash Portfolio</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "60px", color: "#38bdf8" }}>
          Yash Gangate
        </h1>

        <h2>MCA Student | Tech Explorer</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            color: "#cbd5e1",
          }}
        >
          Turning ideas into modern and responsive websites
          through creative design, clean code and
          interactive user experiences.
        </p>

        <a
          href="/yashResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...buttonStyle, display: "inline-block", textDecoration: "none" }}
        >
          View / Download Resume
        </a>
      </section>

      {/* About */}
      <section id="about" style={sectionStyle}>
        <h2 style={headingStyle}>About Me</h2>

        <div style={cardStyle}>
          <p>
            <p style={{ lineHeight: "30px" }}>
              I am currently pursuing Masters of Computer Applications (MCA)
              at RIT College, Sakharale. I am passionate about technology,
              creativity and learning modern digital skills.

              I enjoy exploring different areas of software and web technologies,
              building user-friendly applications and continuously improving my
              technical knowledge through projects and practical learning.
            </p>
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={sectionStyle}>
        <h2 style={headingStyle}>Skills</h2>

        <div style={gridStyle}>
          <div style={skillCard}>HTML</div>
          <div style={skillCard}>CSS</div>
          <div style={skillCard}>JavaScript</div>
          <div style={skillCard}>React</div>
          <div style={skillCard}>Python</div>
          <div style={skillCard}>Java</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={sectionStyle}>
        <h2 style={headingStyle}>Projects</h2>

        <div style={gridStyle}>
          <div style={projectCard}>
            <h3>Hospital Management System</h3>
            <p>
              A system to manage patients, doctors and appointments.
            </p>
          </div>

          <div style={projectCard}>
            <h3>Portfolio Website</h3>
            <p>
              Personal responsive portfolio using React.
            </p>
          </div>

          <div style={projectCard}>
            <h3>Jewellery Shop Management System</h3>
            <p>
              A management system designed to handle jewellery  shop businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={sectionStyle}>
        <h2 style={headingStyle}>Contact</h2>

        <div style={cardStyle}>
          <p>
            Email: <a href="mailto:yashgangate@gmail.com" style={{ color: "#38bdf8", textDecoration: "none" }}>yashgangate@gmail.com</a>
          </p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/yash-gangate" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "none" }}>https://www.linkedin.com/in/yash-gangate</a>
          </p>
          <p>
            Mobile: <a href="tel:9561751387" style={{ color: "#38bdf8", textDecoration: "none" }}>9561751387</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#111827",
          marginTop: "50px",
        }}
      >
        © 2026 Yash Gangate
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const sectionStyle = {
  padding: "60px 40px",
  scrollMarginTop: "80px",
};

const headingStyle = {
  color: "#38bdf8",
  marginBottom: "30px",
  fontSize: "35px",
};

const cardStyle = {
  backgroundColor: "#1e293b",
  padding: "30px",
  borderRadius: "15px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const skillCard = {
  backgroundColor: "#1e293b",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  fontSize: "20px",
};

const projectCard = {
  backgroundColor: "#1e293b",
  padding: "25px",
  borderRadius: "15px",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px 25px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#38bdf8",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};

export default App;