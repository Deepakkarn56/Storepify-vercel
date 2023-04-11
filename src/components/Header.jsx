import React from "react";
import Nav from "./Nav";
import MainNavbar from "./Navbar";


export default function Header() {

  return (
    <>
      <Nav />
      <div style={{ position: "sticky", top: "0", zIndex: "5" }}>
        <MainNavbar />
      </div>
    </>
  );
}
