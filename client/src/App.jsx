import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ProtectedRoute } from "./routes/ProtectedRoute.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { LoginForm, RegisterForm } from "./pages/AuthForms.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Profile } from "./pages/Profile.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Protected section */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}
