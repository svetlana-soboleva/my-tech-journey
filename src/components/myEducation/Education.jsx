import "./education.css";

export const Education = () => {
  return (
    <div className="education">
      <h3 className="title__education">My Education</h3>
      <div className="timeline">
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content salt">
            <h2>SALT</h2>
            <span>September 2024 - Present</span>
            <p>Full-Stack Java Development</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content turing">
            <h2>Turing College</h2>
            <span>June 2023 - August 2024</span>
            <p>
              Full-Stack Development focused on JavaScript, TypeScript, Vue.js,
              React, Node.js, SQL, Docker, and CI/CD
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content bsu">
            <h2>Belarusian State University</h2>
            <span>September 2010 - June 2015</span>
            <p>Master&apos;s in English Literature and Linguistics</p>
          </div>
        </div>
      </div>
    </div>
  );
};
