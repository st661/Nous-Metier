import React from "react";
import { Link } from "react-router-dom";

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

export default function SignIn() {
  return (
    <section id="signin" className="page active" aria-label="Sign in">

      <form id="signinForm" className="card authcard">
        <span className="eyebrow">WELCOME BACK</span>
        <h1 data-template-id="signin-title" className="canva-text mt-3" style={pageTitleStyle}>
          Sign in
        </h1>

        <div className="field">
          <label htmlFor="signinEmail">Email</label>
          <input id="signinEmail" type="email" required placeholder="[Email address]" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="signinPassword">Password</label>
          <input id="signinPassword" type="password" required placeholder="[Password]" autoComplete="current-password" />
        </div>

        <button type="submit" className="btn mt-2">Sign in</button>

        <p className="text-center soft mt-5 mb-1">
          <Link to="/signup" className="linkbtn">Create an account</Link>
        </p>
        <p data-template-id="demo-note" className="canva-text text-center soft text-xs mb-0" style={bodyTextStyle}>
          [Demo login available]
        </p>
        <p className="text-center soft text-xs mt-2 mb-0">
          Demo only: use any email and password; no account is created.
        </p>
      </form>

    </section>
  );
}