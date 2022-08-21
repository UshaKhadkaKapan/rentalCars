import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getCarDetailsAction } from "../redux/actions/carDetailsAction";

const HomePage = () => {
  const { carDetails } = useSelector((state) => state.carDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarDetailsAction());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <h1>The length of car is {carDetails.length}</h1>
    </DefaultLayout>
  );
};

export default HomePage;
