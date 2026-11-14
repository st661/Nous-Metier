import React from "react";
import { Link } from 'react-router-dom';
import jobs from '../src/data/jobs';
import JobCard from './JobCard';

const eyebrowStyle = {
  color: "rgb(49, 91, 186)",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 16,
};

const heroTitleStyle = {
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

const labelStyle = {
  color: "rgb(52, 66, 87)",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 16,
};

const primaryButtonStyle = {
  background: "rgb(49, 91, 186)",
  color: "rgb(255, 255, 255)",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 16,
};

const secondaryButtonStyle = {
  background: "rgb(255, 255, 255)",
  color: "rgb(49, 91, 186)",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 16,
};

const Home = () => {
  return (
    <section id="home" className="page active" aria-label="Home">

      <div className="hero">
        <div>
          <span className="eyebrow" data-template-id="hero-eyebrow" style={eyebrowStyle}>
            CANADIAN OPPORTUNITIES · OPEN TO EVERYONE
          </span>
          <h1 data-template-id="hero-title" className="canva-text" style={heroTitleStyle}>
            Find work in Canada, from anywhere
          </h1>
          <p data-template-id="hero-subtitle" className="canva-text" style={bodyTextStyle}>
            Discover and apply to Canadian one-day, part-time, and full-time jobs—whether you live in Canada or abroad.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link className="btn canva-button" to="/signup" data-template-id="hero-signup" style={primaryButtonStyle}>
              Create free account
            </Link>
            <Link className="btn secondary canva-button" to="/jobs" data-template-id="hero-browse" style={secondaryButtonStyle}>
              Browse jobs
            </Link>
          </div>
        </div>

        <div className="hero-art" role="img" aria-label="Diverse young people working together in a café">
          <img
            data-template-id="hero-image"
            className="canva-image"
            loading="lazy"
            src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1280"
            alt="Diverse young people working together in a café"
          />
        </div>
      </div>


      <form id="homeSearch" className="searchbox card" role="search">
        <div>
          <label htmlFor="homeKeyword" data-template-id="home-keyword-label" className="canva-text" style={labelStyle}>
            Keyword
          </label>
          <input id="homeKeyword" placeholder="Job title or keyword" />
        </div>
        <div>
          <label htmlFor="homeLocation" data-template-id="home-location-label" className="canva-text" style={labelStyle}>
            Location
          </label>
          <input id="homeLocation" placeholder="[City]" />
        </div>
        <div>
          <label htmlFor="homeType" data-template-id="home-type-label" className="canva-text" style={labelStyle}>
            Job type
          </label>
          <select id="homeType">
            <option value="">All types</option>
            <option>One-day</option>
            <option>Part-time</option>
            <option>Full-time</option>
          </select>
        </div>
        <button className="btn canva-button" type="submit" data-template-id="home-search-button" style={primaryButtonStyle}>
          Search jobs
        </button>
      </form>


      <div className="sectionhead">
        <h2 data-template-id="categories-heading" className="canva-text" style={headingStyle}>
          Browse by category
        </h2>
      </div>

      <div className="categories" id="categories">
        <button className="category" data-category="Food service" type="button"><span aria-hidden="true">◫</span>Food service</button>
        <button className="category" data-category="Retail" type="button"><span aria-hidden="true">▦</span>Retail</button>
        <button className="category" data-category="Warehouse" type="button"><span aria-hidden="true">▤</span>Warehouse</button>
        <button className="category" data-category="Hospitality" type="button"><span aria-hidden="true">◇</span>Hospitality</button>
        <button className="category" data-category="Office" type="button"><span aria-hidden="true">▧</span>Office</button>
        <button className="category" data-category="Events" type="button"><span aria-hidden="true">✳</span>Events</button>
      </div>


      <div className="sectionhead">
        <h2 data-template-id="latest-heading" className="canva-text" style={headingStyle}>
          Latest jobs
        </h2>
        <Link to="/jobs" className="linkbtn">View all →</Link>
      </div>

      <div id="latestJobs" className="jobgrid">
        {jobs.slice(0, 3).map(job => <JobCard key={job.id} job={job} />)}
      </div>


      <div className="splitbox">
        <article className="card">
          <h2 data-template-id="seeker-heading" className="canva-text" style={headingStyle}>
            For job seekers
          </h2>
          <p data-template-id="seeker-copy" className="canva-text" style={bodyTextStyle}>
            Explore roles that fit your availability and apply from wherever you live.
          </p>
          <Link className="btn secondary canva-button" to="/jobs" data-template-id="seeker-cta" style={secondaryButtonStyle}>
            Find a job
          </Link>
        </article>

        <article className="card">
          <h2 data-template-id="employer-heading" className="canva-text" style={headingStyle}>
            For employers
          </h2>
          <p data-template-id="employer-copy" className="canva-text" style={bodyTextStyle}>
            Create a clear listing and reach candidates in Canada and beyond.
          </p>
          <Link className="btn secondary canva-button" to="/post-job" data-template-id="employer-cta" style={secondaryButtonStyle}>
            Post a Job
          </Link>
        </article>
      </div>

    </section>
  );
};

export default Home;
