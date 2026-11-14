import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => (
  <>
    <Header />
    <main className="wrap">
      <Outlet />
    </main>
    <footer className="footer">
      <div className="wrap">
        <span>NOUS METIER · &copy; All rights reserved 2026</span>
      </div>
    </footer>
  </>
);

export default Layout;