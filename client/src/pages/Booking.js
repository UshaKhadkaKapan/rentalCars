import { Col, Row, Divider, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { getCarDetailsAction } from "../redux/actions/carDetailsAction";
const { RangePicker } = DatePicker;

const Booking = ({ props }) => {
  const { carDetails } = useSelector((state) => state.carDetails);
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const carid = params.carid;

  // const index = props.carDetails.findIndex((e) => e.carid === parseInt(carid));
  // const cars = this.props.carDetails[index];

  useEffect(() => {
    if (carDetails.length == 0) {
      dispatch(getCarDetailsAction());
    } else {
      setCar(carDetails.find((o) => o._id == carid));
    }
  }, [carDetails]);

  const selectTimeSlots = (values) => {
    console.log(values);
  };
  return (
    <DefaultLayout>
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} className="carimg2 bs1" />
        </Col>
        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            ------- Car Info -------
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent per Hour</p>
            <p>Fuel {car.fuelType} </p>
            <p>Max person {car.capacity}</p>
          </div>

          <Divider type="horizontal" dashed>
            -------Select Time Slot -------
          </Divider>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          />
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Booking;
