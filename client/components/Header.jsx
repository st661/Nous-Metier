import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header({ signedIn = false, onSignOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <div className="wrap navline">
        <Link to="/" className="brand">
          <div className="mark" aria-hidden="true">N</div>
          <span className="brand-name">Nous Métier</span>
        </Link>

        <nav className="navpill" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/jobs">Find Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {signedIn ? (
          <div className="account">
            <Link to="/post-job" className="btn secondary">+ Post a Job</Link>
            <Link to="/applications" className="linkbtn">My Applications</Link>
            <Link to="/profile" className="avatar" aria-label="My profile">NM</Link>
            <button type="button" className="linkbtn" onClick={onSignOut}>Sign out</button>
          </div>
        ) : (
          <div className="account">
            <Link to="/signin" className="linkbtn">Sign in</Link>
            <Link to="/signup" className="btn">Sign up</Link>
          </div>
        )}

        <button
          type="button"
          id="menuButton"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          aria-label="Open menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          ☰
        </button>
      </div>

      <nav id="mobileMenu" className={menuOpen ? "open" : ""} aria-label="Mobile navigation">
        <div className="mobile-links">
          <Link to="/" className="linkbtn" onClick={close}>Home</Link>
          <Link to="/jobs" className="linkbtn" onClick={close}>Find Jobs</Link>
          <Link to="/about" className="linkbtn" onClick={close}>About</Link>
          <Link to="/contact" className="linkbtn" onClick={close}>Contact</Link>

          {signedIn ? (
            <>
              <Link to="/dashboard" className="linkbtn" onClick={close}>Dashboard</Link>
              <Link to="/applications" className="linkbtn" onClick={close}>My Applications</Link>
              <Link to="/profile" className="linkbtn" onClick={close}>My profile</Link>
              <Link to="/post-job" className="linkbtn" onClick={close}>+ Post a Job</Link>
              <button type="button" className="linkbtn" onClick={() => { close(); onSignOut(); }}>Sign out</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="linkbtn" onClick={close}>Sign in</Link>
              <Link to="/signup" className="btn" onClick={close}>Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}