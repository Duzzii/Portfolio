import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_details">
        <div className="col_intro">
        <h1>Hello.</h1>
        <p> Need a nice looking site? Look no further! I specialize in creating 
          visually appealing and user-friendly websites. Whether you need a 
          simple landing page or a complex web application, I can help you 
          bring your vision to life. Contact me today to discuss your project 
          and get a free quote.
        </p>
        </div>
       </div>
       <div className="contact_container">
          <div className="col_name">
          
            <ul>
            <h2>Contact Details</h2>
              <li>Email: exmaple@gmail.com</li>
              <li>LinkedIn: www.linkedin.com</li>
              <li>GitHub: github.com</li>
              <li>Phone: +27 123-456-7890</li>
            </ul>
          </div>

          <div className="contact_form">
            <h2>Send me a message</h2>
            <form >
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Message:
                <textarea name="message"></textarea>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        
      <div>
      </div>
    </div>
  );
}