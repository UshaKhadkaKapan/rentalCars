import React from "react";
import { Button, Dropdown, Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userBooking">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/admin">Admin</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "orangered" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h5>
                <b>
                  <Link
                    to="/"
                    style={{ color: "orangered", textDecoration: "none" }}
                  >
                    Renting Cars
                  </Link>
                </b>
              </h5>
              <Dropdown overlay={menu} placement="bottom">
                <Button>{user.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DefaultLayout;
