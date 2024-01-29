import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GoogleHome from "../pages/googleHome/GoogleHome.tsx";
import SignInView from "../pages/SignIn/SignInView.tsx";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={GoogleHome} />
        <Route path="/sign-in-view" Component={SignInView} />
      </Routes>
    </Router>
  );
}
