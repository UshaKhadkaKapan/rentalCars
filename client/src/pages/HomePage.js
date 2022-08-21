import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getCarDetailsAction } from "../redux/actions/carDetailsAction";
import { Row, Col } from "antd";
const HomePage = () => {
  const { carDetails } = useSelector((state) => state.carDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarDetailsAction());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Row></Row>
    </DefaultLayout>
  );
};

export default HomePage;
