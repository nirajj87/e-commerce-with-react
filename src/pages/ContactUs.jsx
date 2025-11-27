import React, { useState } from "react";
import "../style/ContactUs.css";
// import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle Form Submit
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_xxxxxx",   // <-- EmailJS Service ID
//         "template_xxxxxx",  // <-- EmailJS Template ID
//         formData,
//         "YOUR_PUBLIC_KEY"   // <-- EmailJS Public Key
//       )
//       .then(
//         () => {
//           setStatus("Message Sent Successfully ✔");
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         () => {
//           setStatus("Failed to send message ❌");
//         }
//       );
//   };

  return (
    <div className="contact-main fade-in">
      <div className="contact-card slide-up">

        {/* LEFT SECTION */}
        <div className="left-section">
          <h2 className="title">Get In Touch</h2>

          <p className="subtitle">
            Passionate Full-Stack Developer with 11.6+ years of experience building scalable and 
            high-performance web applications. Skilled in system architecture, UI/UX development, 
            REST APIs, optimization, and end-to-end full-stack development.
          </p>

          {/* Profile Card */}
          <div className="profile-block zoom-in">
            <img
              src="https://devsupport.co.in/profile/assets/images/nirajprofile.jpeg"
              alt="Niraj Singh"
            />
            <h3>Niraj Singh</h3>
            <p className="role">Full Stack Developer</p>

            <div className="details">

              <p>
                <i className="fas fa-envelope"></i> 
                <a href="mailto:nirajkumar11288@gmail.com">nirajkumar11288@gmail.com</a>
              </p>

              <p>
                <i className="fas fa-phone"></i> 
                <a href="tel:+918851541659">+91 8851541659</a>
              </p>

              <p>
                <i className="fab fa-linkedin"></i> 
                <a href="https://www.linkedin.com/in/niraj-kumar-singh-1309b3a6/" target="_blank">
                  LinkedIn Profile
                </a>
              </p>

              <p>
                <i className="fab fa-github"></i> 
                <a href="https://github.com/nirajj87" target="_blank">
                  GitHub Portfolio
                </a>
              </p>

              <p>
                <i className="fas fa-globe"></i> 
                <a href="https://devsupport.co.in/profile/" target="_blank">
                  My Website
                </a>
              </p>

            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section slide-left">
          <h3>Send a Message</h3>

          {/* <form onSubmit={sendEmail}> */}
          <form >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button type="submit">Send Message</button>

            {status && <p className="status">{status}</p>}
          </form>
        </div>

      </div>
    </div>
  );
}
