import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  return user ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
export default PrivateRouter;

// export const PrivateRouter = (props) => {
//   if (localStorage.getItem("user")) {
//     return <Route {...props} />;
//   } else {
//     return <Route to="/login" />;
//   }
// };
