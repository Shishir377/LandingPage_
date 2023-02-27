import React from "react";
import LandingPage from "../../Pages/landingPage/landingPage";
import Header from "../Header/Header";

export default function Layout({ Children }) {
  return (
    <div className="">
      <Header />

      <LandingPage />

      <div
        className="w-full bg-slate-800 text-white text-center"
        style={{ bottom: "0px" }}
      >
        Footer
      </div>
    </div>
  );
}
