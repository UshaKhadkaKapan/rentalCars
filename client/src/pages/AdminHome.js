import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getCarDetailsAction } from "../redux/actions/carDetailsAction";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const { carDetails } = useSelector((state) => state.carDetails);
  const [totalCars, setTotalCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarDetailsAction());
  }, [dispatch]);

  // when there will be changes on bookingcar
  useEffect(() => {
    setTotalCars(carDetails);
  }, [carDetails]);

  return (
    <DefaultLayout>
      <Row justify="center" gutter={16}>
        {totalCars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24} key={car._id}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" />
                <div className="car-content d-flex align-item-center justify-content-between">
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>

                  <div className="mr-4">
                    <Link to={`/editcar/${car._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "pointer" }}
                      />
                    </Link>
                    <DeleteOutlined
                      style={{ color: "red", cursor: "pointer" }}
                    />
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

export default AdminHome;
