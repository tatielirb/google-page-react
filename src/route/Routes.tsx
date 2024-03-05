import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GoogleHome from "pages/googleHome/GoogleHome";
import SignInView from "pages/SignIn/SignInView";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={GoogleHome} />
        <Route path="/sign-in-view" Component={SignInView} />
      </Routes>
    </Router>
  );
}
