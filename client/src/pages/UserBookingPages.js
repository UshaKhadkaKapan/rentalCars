import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getBookingDetailsAction } from "../redux/actions/bookingAction";

const UserBookingPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingDetailsAction());
  }, [dispatch]);
  return (
    <DefaultLayout>
      <h1>My Bookings</h1>
    </DefaultLayout>
  );
};

export default UserBookingPages;
