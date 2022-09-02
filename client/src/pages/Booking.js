import React from "react";
import DefaultLayout from "../components/DefaultLayout";

const Booking = ({ match }) => {
  return (
    <DefaultLayout>
      <h1>Booking</h1>
      <h1>Car Id = {match.params.carid}</h1>
    </DefaultLayout>
  );
};

export default Booking;
