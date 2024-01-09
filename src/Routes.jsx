import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ChangePasswordOne = React.lazy(() => import("pages/ChangePasswordOne"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const Signin = React.lazy(() => import("pages/Signin"));
const ViolationsMapView = React.lazy(() => import("pages/ViolationsMapView"));
const ViolationFines = React.lazy(() => import("pages/ViolationFines"));
const History = React.lazy(() => import("pages/History"));
const Violations = React.lazy(() => import("pages/Violations"));
const ChangePassword = React.lazy(() => import("pages/ChangePassword"));
const MyProfile = React.lazy(() => import("pages/MyProfile"));
const ViolationsOne = React.lazy(() => import("pages/ViolationsOne"));
const Dhasboard = React.lazy(() => import("pages/Dhasboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dhasboard" element={<Dhasboard />} />
          <Route path="/violationsone" element={<ViolationsOne />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/violations" element={<Violations />} />
          <Route path="/history" element={<History />} />
          <Route path="/violationfines" element={<ViolationFines />} />
          <Route path="/violationsmapview" element={<ViolationsMapView />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepasswordone" element={<ChangePasswordOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
