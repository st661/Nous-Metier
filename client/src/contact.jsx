import React from "react";

const pageTitleStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 600,
  fontStyle: "normal",
  fontSize: 32,
};

const bodyTextStyle = {
  color: "rgb(100, 112, 132)",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: 16,
};

const valueTextStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: 16,
};

export default function Contact() {
  return (
    <section id="contact" className="page active" aria-label="Contact">

      <div className="pageintro">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1 data-template-id="contact-title" className="canva-text" style={pageTitleStyle}>
          Contact
        </h1>
        <p data-template-id="contact-subtitle" className="canva-text" style={bodyTextStyle}>
          Questions about the project? Reach the team through its published contact details.
        </p>
      </div>

      <article className="card p-7 max-w-xl">
        <div className="profile-row">
          <strong>Email</strong>
          <span data-template-id="contact-email" className="canva-text" style={valueTextStyle}>
            [Email address]
          </span>
        </div>
        <div className="profile-row">
          <strong>Response time</strong>
          <span data-template-id="contact-response" className="canva-text" style={valueTextStyle}>
            [Response time]
          </span>
        </div>
        <p data-template-id="contact-help" className="canva-text soft mt-5 mb-0" style={bodyTextStyle}>
          A message form can be connected when the student team adds a real submission destination.
        </p>
      </article>

    </section>
  );
}