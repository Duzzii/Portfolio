import "./works.scss"

export default function Works() {
  return (
    <div className="work" id="work">
      <h1>
        Qualifications
      </h1>
      <div className="grid">
        <div className="block">
          <h2>Education</h2>
          <p>University of Pretoria</p>
          <p>2020 - 2023</p>
          <p>Bachelor of Science in Computer Science</p>
        </div>
        <div className="block">
          <h2>Experience</h2>
          <p>Frontend Developer</p>
          <p>2020 - 2021</p>
          <p>Company Name: XYZ</p>
        </div>
        <div className="block">
          <h2>Skills</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Node</p>
          {/* <p>Express</p> */}
          {/* <p>MongoDB</p> */}
          <p>Python</p>
          {/* <p>Django</p> */}
          {/* <p>Flask</p> */}
        </div>
      </div>
    </div>
  )
}
