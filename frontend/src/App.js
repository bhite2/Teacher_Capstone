// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ResourcesPage from "./components/ResourcesPage/ResourcesPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import CreateResourcePage from "./pages/CreateResourcePage/CreateResourcePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resource" element={<ResourcesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/create" element={<CreateResourcePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
