import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d7a49e0d-0945-4749-b93a-0f456bd3e3b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact">
      <div id="contact" className="contact-title">
        <h1>Contact me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to apply my skill on your company, so feel
            free{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ayeleamanuel50@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+225-930-740-420</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Arbaminch Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">write your message</label>
          <textarea
            name="message"
            id=""
            rows="8"
            placeholder="Enter your message"
          >
            Enter your message
          </textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
