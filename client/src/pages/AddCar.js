import { Col, Row, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout.js";
import { addCarDetailsAction } from "../redux/actions/carDetailsAction.js";

const AddCar = () => {
  const dispatch = useDispatch();

  const onFinish = async (value) => {
    console.log(value);
    value.bookedTimeSlots = [];
    dispatch(addCarDetailsAction(value));
  };
  return (
    <DefaultLayout>
      <Row justify="center">
        <Col lg={12} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h3>Add New Car</h3>
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
              <button className="btn1">ADD CAR</button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default AddCar;
