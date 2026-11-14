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

export default function PostJob() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add the new job to shared state once it exists
  };

  return (
    <section id="post-job" className="page active" aria-label="Post a Job">

      <div className="pageintro">
        <h1 data-template-id="post-title" className="canva-text" style={pageTitleStyle}>
          Post a Job
        </h1>
        <p data-template-id="post-subtitle" className="canva-text" style={bodyTextStyle}>
          Give applicants the details they need to decide if the role fits.
        </p>
      </div>

      <div className="form-layout">

        <form id="postForm" className="card formcard" onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field">
              <label htmlFor="postTitle">Job title</label>
              <input id="postTitle" required placeholder="[Job title]" />
            </div>
            <div className="field">
              <label htmlFor="postCompany">Company</label>
              <input id="postCompany" required placeholder="[Company name]" />
            </div>
            <div className="field">
              <label htmlFor="postLocation">Location</label>
              <input id="postLocation" required placeholder="[City], Canada" />
            </div>
            <div className="field">
              <label htmlFor="postType">Job type</label>
              <select id="postType" required>
                <option value="">Select job type</option>
                <option>One-day</option>
                <option>Part-time</option>
                <option>Full-time</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="postCategory">Category</label>
              <select id="postCategory" required>
                <option value="">Select category</option>
                <option>Food service</option>
                <option>Retail</option>
                <option>Warehouse</option>
                <option>Hospitality</option>
                <option>Office</option>
                <option>Events</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="postPay">Pay</label>
              <input id="postPay" required placeholder="[Pay range]" />
            </div>
            <div className="field">
              <label htmlFor="postStart">Start date</label>
              <input id="postStart" type="date" required />
            </div>
            <div className="field">
              <label htmlFor="postDeadline">Apply by</label>
              <input id="postDeadline" type="date" required />
            </div>
            <div className="field full">
              <label htmlFor="postDescription">Description</label>
              <textarea id="postDescription" required placeholder="Describe the work and responsibilities"></textarea>
            </div>
            <div className="field full">
              <label htmlFor="postRequirements">Requirements</label>
              <textarea id="postRequirements" required placeholder="Describe experience or skills needed"></textarea>
            </div>
          </div>

          <label className="checkrow">
            <input id="postAbroad" type="checkbox" />
            Open to applicants outside Canada
          </label>
          <button type="submit" className="btn mt-3">Publish job</button>
        </form>

        <aside className="card help">
          <h2 data-template-id="posting-help-title" className="canva-text" style={headingStyle}>
            Listing preview
          </h2>
          <p data-template-id="posting-help-copy" className="canva-text soft" style={bodyTextStyle}>
            Your listing will appear in Find Jobs. Enable “Open to applicants outside Canada” to welcome applicants worldwide.
          </p>
          <div className="tag blue inline-block">Visible after publishing</div>
        </aside>

      </div>
    </section>
  );
}