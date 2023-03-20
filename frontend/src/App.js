// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddPaymentPage from "./pages/AddPaymentPage/AddPaymentPage";
import UpdatePaymentPage from "./pages/UpdatePaymentPage/UpdatePaymentPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SideBar from "./components/SideBar/SideBar";

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
        <Route
          path="/addpayment"
          element={
            <PrivateRoute>
              <AddPaymentPage />
            </PrivateRoute>
          }
        />
        <Route path="/update" element={
          <PrivateRoute><UpdatePaymentPage/></PrivateRoute>
        }>
          
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
