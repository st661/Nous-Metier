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

export default function MyApplication() {
  return (
    <section id="applications" className="page active" aria-label="My Applications">

      <div className="pageintro">
        <h1 data-template-id="applications-title" className="canva-text" style={pageTitleStyle}>
          My Applications
        </h1>
        <p data-template-id="applications-subtitle" className="canva-text" style={bodyTextStyle}>
          Follow your demo application activity in one place.
        </p>
      </div>

      <div className="card tablewrap">
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Date applied</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="applicationsBody"></tbody>
        </table>
        <div id="applicationsEmpty" className="p-8 text-center soft" hidden>
          No applications yet. Browse jobs to get started.
        </div>
      </div>

      <p className="soft text-xs mt-4">
        Status examples: <span className="tag">Submitted</span> <span className="tag">Reviewed</span> <span className="tag">Accepted</span>
      </p>

    </section>
  );
}