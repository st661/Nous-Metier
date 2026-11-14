import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import FindJobs, { JobDetail, ApplyJob } from "./src/findJobs";
import About from "./src/about";
import Contact from "./src/contact";
import SignIn from "./src/signIn";
import SignUp from "./src/signUp";
import Dashboard from "./src/dashboard";
import MyApplications from "./src/myApplication";
import Profile from "./src/myProfile";
import PostJob from "./src/postJob";

const MainRouter = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<FindJobs />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/jobs/:id/apply" element={<ApplyJob />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/applications" element={<MyApplications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);

export default MainRouter;
