import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Form } from "antd";

const Register = () => {
  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
          <h1 className="login-logo">RentingCars</h1>
        </Col>
        <Col lg={8} className="text-left p-5 ">
          <Form layout="vertical" className="login-form p-5">
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="user"
              label="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="confirmPassword"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button className="btn1 mt-2 mb-3">Register Now</button>
            <br />
            <Link to="/login">Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
