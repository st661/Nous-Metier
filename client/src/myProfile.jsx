import React, { useState } from "react";

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

export default function MyProfile() {
  const [editing, setEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: save the profile once shared state exists
    setEditing(false);
  };

  return (
    <section id="profile" className="page active" aria-label="My profile">

      <div className="pageintro">
        <h1 data-template-id="profile-title" className="canva-text" style={pageTitleStyle}>
          My profile
        </h1>
        <p className="soft">Your demo account details and job preferences.</p>
      </div>

      <div className="profile-grid">

        <article className="card p-6">
          <div className="flex gap-4 items-center mb-5">
            <div className="company-icon" aria-hidden="true">NM</div>
            <div>
              <h2 id="profileName" className="mb-0">[Full name]</h2>
              <span id="profileRole" className="soft">Job seeker</span>
            </div>
          </div>

          <div className="profile-row"><strong>Email</strong><span id="profileEmail">[Email]</span></div>
          <div className="profile-row"><strong>Phone</strong><span id="profilePhone">[Phone]</span></div>
          <div className="profile-row"><strong>Country</strong><span id="profileCountry">[Country]</span></div>

          <div className="flex flex-wrap gap-2 mt-5">
            <button type="button" id="editProfile" className="btn secondary" onClick={() => setEditing(true)}>
              Edit profile
            </button>
            <button type="button" id="deleteAccount" className="btn quiet" onClick={() => setConfirmingDelete(true)}>
              Delete account
            </button>
          </div>

          <div id="deleteConfirm" hidden={!confirmingDelete} className="mt-4 p-3 rounded-xl bg-gray-50 border">
            <p className="text-sm mb-2">Delete this demo account and clear its activity?</p>
            <button type="button" id="confirmDelete" className="btn">Delete demo account</button>
            <button type="button" id="cancelDelete" className="linkbtn ml-2" onClick={() => setConfirmingDelete(false)}>
              Cancel
            </button>
          </div>

          <form id="profileForm" hidden={!editing} className="mt-5" onSubmit={handleSave}>
            <div className="field mb-3">
              <label htmlFor="editName">Full name</label>
              <input id="editName" required />
            </div>
            <div className="field mb-3">
              <label htmlFor="editPhone">Phone</label>
              <input id="editPhone" required />
            </div>
            <div className="field mb-3">
              <label htmlFor="editCountry">Country</label>
              <input id="editCountry" required />
            </div>
            <button type="submit" className="btn">Save changes</button>
            <button type="button" id="cancelEdit" className="linkbtn ml-2" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </form>
        </article>

        <article className="card p-6">
          <h2 data-template-id="preferences-title" className="canva-text" style={headingStyle}>
            Job preferences
          </h2>
          <p className="soft">Preferred categories</p>
          <div className="tags">
            <span className="tag">Food service ×</span>
            <span className="tag">Retail ×</span>
          </div>

          <p className="soft mt-6">Preferred job types</p>
          <div className="tags">
            <span className="tag blue">Part-time ×</span>
            <span className="tag blue">One-day ×</span>
          </div>

          <p className="soft text-xs mt-5">Preference tags are illustrative in this wireframe.</p>
        </article>

      </div>
    </section>
  );
}