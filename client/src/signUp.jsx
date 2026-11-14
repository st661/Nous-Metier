import React, { useState } from "react";
import { Link } from "react-router-dom";

const pageTitleStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 600,
  fontStyle: "normal",
  fontSize: 32,
};

export default function SignUp() {
  const [role, setRole] = useState("Job seeker");

  return (
    <section id="signup" className="page active" aria-label="Sign up">

      <form id="signupForm" className="card authcard">
        <span className="eyebrow">GET STARTED</span>
        <h1 data-template-id="signup-title" className="canva-text mt-3" style={pageTitleStyle}>
          Create your account
        </h1>
        <p className="soft">Explore jobs or start posting opportunities.</p>

        <label>I am a</label>
        <div className="segment" role="group" aria-label="Account role">
          <button
            type="button"
            className={role === "Job seeker" ? "active" : ""}
            aria-pressed={role === "Job seeker"}
            onClick={() => setRole("Job seeker")}
          >
            Job seeker
          </button>
          <button
            type="button"
            className={role === "Employer" ? "active" : ""}
            aria-pressed={role === "Employer"}
            onClick={() => setRole("Employer")}
          >
            Employer
          </button>
        </div>

        <div className="fields">
          <div className="field">
            <label htmlFor="signupFirst">First name</label>
            <input id="signupFirst" required placeholder="[First name]" autoComplete="given-name" />
          </div>
          <div className="field">
            <label htmlFor="signupLast">Last name</label>
            <input id="signupLast" required placeholder="[Last name]" autoComplete="family-name" />
          </div>
          <div className="field full">
            <label htmlFor="signupEmail">Email</label>
            <input id="signupEmail" required type="email" placeholder="[Email address]" autoComplete="email" />
          </div>
          <div className="field full">
            <label htmlFor="signupPhone">Phone</label>
            <input id="signupPhone" required type="tel" placeholder="[Phone]" autoComplete="tel" />
          </div>
          <div className="field full">
            <label htmlFor="signupCountry">Country</label>
            <input id="signupCountry" required placeholder="[Country]" />
          </div>
          <div className="field full">
            <label htmlFor="signupPassword">Password</label>
            <input
              id="signupPassword"
              required
              minLength={6}
              type="password"
              autoComplete="new-password"
              placeholder="At least 6 characters"
            />
          </div>
        </div>

        <button type="submit" className="btn mt-5">Sign up</button>
        <p className="text-center soft mt-5 mb-0">
          Already have an account? <Link to="/signin" className="linkbtn">Sign in</Link>
        </p>
      </form>

    </section>
  );
}