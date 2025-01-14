import "./workExperience.css";

export const WorkExperience = () => {
  return (
    <div className="workExperience">
      <h3>Work Experience</h3>
      <div className="timeline">
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content salt">
            <h2>SALT</h2>
            <span>September 2024 - Present</span>
            <p>Full-Stack Java Developer</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content salt">
            <h2>Grand Hotel Stockholm</h2>
            <p>Pastry Sous Chef</p>
            <span>2024</span>
            <p>
              Assisted in managing pastry kitchen operations,
              overseeing junior staff, and ensuring quality, consistency, and
              timely delivery.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content salt">
            <h2>Spröd Stenugnsbageri</h2>
            <p>Head Pastry Chef</p>
            <span>2020 - 2023</span>
            <p>
              Creating new and original recipes, overseeing
              interns, managing inventory and overseeing production processes.
            </p>
          </div>
        </div>

        <div className="timeline-item smallScreenExperience">
          <div className="dot"></div>
          <div className="content salt">
            <h2>MotherGoose International Preschool</h2>
            <p>Teacher Assistant</p>
            <span>2015 - 2018</span>
            <p>
              Collaborated with lead teachers to implement curriculum and manage
              classroom activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
