import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "@pages/Dashboard";
import LoginPage from "@pages/Login/";
import SettingsPage from "@pages/Settings";
import NotFoundPage from "@pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
