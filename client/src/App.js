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
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
