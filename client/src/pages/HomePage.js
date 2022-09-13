import React, { useEffect, useState } from "react";
import { Col, Row, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getCarDetailsAction } from "../redux/actions/carDetailsAction";

import { Link } from "react-router-dom";
import moment from "moment";
const { RangePicker } = DatePicker;
const HomePage = () => {
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

  const setFilter = (values) => {
    var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
    var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");

    var temp = [];
    for (var car of carDetails) {
      if (car.bookedTimeSlots.length === 0) {
        temp.push(car);
      } else {
        for (var booking of car.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(car);
          }
        }
      }
    }

    setTotalCars(temp);
  };
  return (
    <DefaultLayout>
      <Row justify="center">
        <Col lg={20} sm={24} className="d-flex justify-content-left mt-3">
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={setFilter}
          />
        </Col>
      </Row>
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

                  <div>
                    <button className="btn1 mr-2">
                      <Link to={`/booking/${car._id}`}>Book</Link>
                    </button>
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
