import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <article className="card jobcard">
      <span className="eyebrow">{job.category.toUpperCase()}</span>
      <h3>{job.title}</h3>
      <p>{job.company} · {job.city}</p>

      <div className="tags">
        <span className="tag">{job.type}</span>
        <span className="tag">{job.category}</span>
        {job.abroad && <span className="tag blue">Open to applicants abroad</span>}
      </div>

      <p>{job.description}</p>

      <div className="bottom">
        <strong>{job.pay}</strong>
        <Link to={`/jobs/${job.id}`} className="btn secondary">View job</Link>
      </div>
    </article>
  );
}
