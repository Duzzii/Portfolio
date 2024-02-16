import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
     
      <div className="intro__container">
        <h1 className="intro__title">BSc Computer Science Graduate</h1>
        <h2 className="intro_sub">Fullstack Developer</h2>
        <p className="intro__subtitle">
          I am a fullstack developer with a passion for creating beautiful and functional web applications.
          I have experience working with modern technologies and frameworks such as React, Node.js, and MongoDB. 
          I am always eager to learn new technologies and improve my skills. 
          I am currently looking for new opportunities to work with a team of talented developers and contribute to building amazing products.
         </p>
         <button onClick={() => alert('Button clicked!')}>Projects</button>
      </div>
      
    </div>
  )
}
