import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { getCarDetailsAction } from "../redux/actions/carDetailsAction";
import moment from "moment";
import { bookingCarAction } from "../redux/actions/bookingAction";
const { RangePicker } = DatePicker;

const Booking = ({ props }) => {
  const { carDetails } = useSelector((state) => state.carDetails);
  const [car, setCar] = useState({});
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  const carid = params.carid;

  useEffect(() => {
    if (carDetails.length == 0) {
      dispatch(getCarDetailsAction());
    } else {
      setCar(carDetails.find((o) => o._id == carid));
    }
  }, [carDetails]);

  const selectTimeSlots = (values) => {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));
    setTotalHours(values[1].diff(values[0], "hours"));
  };

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);

  const bookNow = () => {
    const reqObj = {
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    dispatch(bookingCarAction(reqObj));
  };
  return (
    <DefaultLayout>
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className="p-3">
          <img src={car.image} className="carimg2 bs1 w-100" />
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

          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Book Slots
          </button>
          {from && to && (
            <div style={{ textAlign: "right" }}>
              <p>
                Total Hours:<b>{totalHours}</b>
              </p>
              <p>
                Rent Per Hour:<b>{car.rentPerHour}</b>
              </p>
              <p>
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDriver(true);
                    } else {
                      setDriver(false);
                    }
                  }}
                >
                  Driver Required
                </Checkbox>
              </p>
              <h3>Total Amount:{totalAmount}</h3>
              <button className="btn1" onClick={bookNow}>
                Book Now
              </button>
            </div>
          )}
        </Col>
      </Row>
      {car.name && (
        <Modal
          visible={showModal}
          closable={false}
          footer={false}
          title="Booked Time Slots"
        >
          {car && (
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}
              <div className="text-right">
                <button
                  className="btn-1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </DefaultLayout>
  );
};

export default Booking;
