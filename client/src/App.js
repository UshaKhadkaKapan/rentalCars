import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/Booking";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import PrivateRouter from "./components/PrivateRouter";
import UserBookingPages from "./pages/UserBookingPages";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRouter>
                <HomePage />
              </PrivateRouter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/booking/:carid"
            element={
              <PrivateRouter>
                <BookingCar />
              </PrivateRouter>
            }
          />
          <Route
            path="/userBooking"
            element={
              <PrivateRouter>
                <UserBookingPages />
              </PrivateRouter>
            }
          />

          <Route
            path="/addcar"
            element={
              <PrivateRouter>
                <AddCar />
              </PrivateRouter>
            }
          />

          <Route
            path="/admin"
            element={
              <PrivateRouter>
                <AdminHome />
              </PrivateRouter>
            }
          />

          <Route
            path="/editcar/:carid"
            element={
              <PrivateRouter>
                <EditCar />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
