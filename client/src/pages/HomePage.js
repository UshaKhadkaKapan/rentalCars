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
      <Row justify="center" gutter={16} className="mt-5">
        {carDetails.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" />
                <div className="car-content d-flex align-item-center justify-content-between">
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>
                  <div>
                    <button className="btn1 mr-2">Book</button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
};

export default HomePage;
