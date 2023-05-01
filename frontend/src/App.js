// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Resources from "./pages/Resources/Resources";
import Resource from "./pages/Resource/Resource";
import UsersPage from "./pages/UsersPage/UsersPage";
import CreateResourcePage from "./pages/CreateResourcePage/CreateResourcePage";
import Friends from "./pages/FriendsPage/FriendsPage";

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
        <Route path="/resources/" element={<Resources />} />
        <Route path="/resource/:resourceID" element={<Resource />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/create" element={<CreateResourcePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
