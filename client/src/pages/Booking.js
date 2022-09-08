import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { getCarDetailsAction } from "../redux/actions/carDetailsAction";

const Booking = ({ props }) => {
  const [car, setCar] = useState({});
  const { carDetails } = useSelector((state) => state.carDetails);
  const dispatch = useDispatch();
  const { carid } = useParams();
  // const index = props.carDetails.findIndex((e) => e.carid === parseInt(carid));
  // const cars = this.props.carDetails[index];

  useEffect(() => {
    dispatch(getCarDetailsAction());
    if (carDetails.length > 0) {
      setCar(carDetails.find((o) => o._id == this.props.carid));
    }
  }, [dispatch, carDetails]);
  return (
    <DefaultLayout>
      <h1>Booking</h1>
      <h1>Car name{this.props.carid}</h1>
    </DefaultLayout>
  );
};

export default Booking;
