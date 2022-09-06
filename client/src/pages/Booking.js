import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";

const Booking = ({ children }) => {
  const [params] = useSearchParams();

  // useEffect(()=>{
  //   const carid=params.get("carid")
  // },[])
  return (
    <DefaultLayout>
      <h1>Booking</h1>
      <h1>Car Id ={params.getcarid}</h1>
    </DefaultLayout>
  );
};

export default Booking;
