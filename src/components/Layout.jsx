import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {

  return (
    <>
    <div id="content-wrapper">
      <main>
        <Header/>
        <Outlet />
      </main>
    </div>
      <Footer />
    </>
  )
}