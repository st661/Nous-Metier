import React from "react";
import { Link } from "react-router-dom";
import jobs from "./data/jobs";
import JobCard from "../components/JobCard";

const headingStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 24,
};

export default function Dashboard() {
  return (
    <section id="dashboard" className="page active" aria-label="Dashboard">

      <div className="pageintro">
        <span className="eyebrow">YOUR DASHBOARD</span>
        <h1 id="welcomeTitle">Welcome back, [First name]</h1>
        <p className="soft">A quick look at your opportunities.</p>
      </div>

      <div className="stats">
        <article className="card stat"><span>Applications sent</span><strong id="statApplications">0</strong></article>
        <article className="card stat"><span>Saved jobs</span><strong id="statSaved">0</strong></article>
        <article className="card stat"><span>Profile complete</span><strong id="statProfile">[X]%</strong></article>
      </div>

      <div className="sectionhead">
        <h2 data-template-id="recommended-heading" className="canva-text" style={headingStyle}>
          Recommended jobs
        </h2>
        <Link to="/jobs" className="linkbtn">See all jobs →</Link>
      </div>

      <div id="recommendedJobs" className="jobgrid">
        {jobs.slice(0, 4).map(job => <JobCard key={job.id} job={job} />)}
      </div>

      <div className="card p-5 mt-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="mb-1">Make your profile stand out</h2>
          <p className="soft mb-0">Keep your details ready for your next application.</p>
        </div>
        <Link to="/profile" className="btn secondary">My profile →</Link>
      </div>

    </section>
  );
}