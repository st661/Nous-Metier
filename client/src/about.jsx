import React from "react";

const pageTitleStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 600,
  fontStyle: "normal",
  fontSize: 32,
};

const headingStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 24,
};

const bodyTextStyle = {
  color: "rgb(100, 112, 132)",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: 16,
};

export default function About() {
  return (
    <section id="about" className="page active" aria-label="About">

      <div className="pageintro">
        <span className="eyebrow">THE PROJECT</span>
        <h1 data-template-id="about-title" className="canva-text" style={pageTitleStyle}>
          About Nous Metier
        </h1>
        <p className="soft">A student-built concept for finding Canadian work without borders.</p>
      </div>

      <div className="splitbox">
        <article className="card">
          <h2 data-template-id="about-seekers-title" className="canva-text" style={headingStyle}>
            Opportunity for job seekers
          </h2>
          <p data-template-id="about-seekers-copy" className="canva-text soft" style={bodyTextStyle}>
            Browse one-day, part-time, and full-time openings, including roles open to applicants living outside Canada.
          </p>
        </article>

        <article className="card">
          <h2 data-template-id="about-employers-title" className="canva-text" style={headingStyle}>
            A simpler way to post
          </h2>
          <p data-template-id="about-employers-copy" className="canva-text soft" style={bodyTextStyle}>
            Employers can describe their role, requirements, schedule, and whether international applicants are welcome.
          </p>
        </article>
      </div>

      <div className="card p-7 mt-5">
        <h2 data-template-id="about-project-title" className="canva-text" style={headingStyle}>
          Built as a MERN project
        </h2>
        <p data-template-id="about-project-copy" className="canva-text soft mb-0" style={bodyTextStyle}>
          This interactive prototype maps the core screens and flows for a student team to implement with MongoDB, Express, React, and Node.js.
        </p>
      </div>

    </section>
  );
}