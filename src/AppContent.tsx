import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersonalInfoContextProvider } from "./contexts/PersonalInfoContext";
import PreloaderComponent from "./components/PreloaderComponent";
import VerticalSocialComponent from "./components/VerticalSocialComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import LandingPage from "./pages/LandingPage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";

const AppContent = () => (
  <PersonalInfoContextProvider>
    <PreloaderComponent />
    <Router>
      <VerticalSocialComponent />
      <HeaderComponent />
      <div className="content-wrapper">
        <div className="content-body">
          <Switch>
            <Route path="/" element={<LandingPage />} />
            <Route path="/deposit" element={<DepositPage />} />
            <Route path="/withdraw" element={<WithdrawPage />} />
          </Switch>
        </div>
      </div>
      <ToastContainer pauseOnFocusLoss={false} />
      <FooterComponent />
    </Router>
  </PersonalInfoContextProvider>
);

export default AppContent;