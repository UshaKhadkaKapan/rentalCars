import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DefaultLayout from "../components/DefaultLayout.js";
import {
  addCarDetailsAction,
  getCarDetailsAction,
} from "../redux/actions/carDetailsAction.js";

const EditCar = () => {
  const { carDetails } = useSelector((state) => state.carDetails);
  const dispatch = useDispatch();
  const params = useParams();
  const carid = params.carid;
  const [car, setCar] = useState();
  const [totalCars, setTotalCars] = useState([]);

  useEffect(() => {
    if (carDetails.length == 0) {
      dispatch(getCarDetailsAction());
    } else {
      setTotalCars(carDetails);
      setCar(carDetails.find((o) => o._id == carid));
    }
  }, [carDetails]);

  const onFinish = async (value) => {
    console.log(value);
    value.bookedTimeSlots = [];
    dispatch(addCarDetailsAction(value));
  };
  return (
    <DefaultLayout>
      <Row justify="center ">
        <Col lg={12} sm={24} xs={24} className="p-2">
          {totalCars.length > 0 && (
            <Form
              initialValues={car}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit Car</h3>
              {car.name}
              {carDetails.length}
              <hr />
              <Form.Item
                name="name"
                label="Car name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image url"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rentPerHour"
                label="Rent per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fuelType"
                label="Fuel Type"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">Edit Car</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default EditCar;
