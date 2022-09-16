import { Col, Row } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getBookingDetailsAction } from "../redux/actions/bookingAction";

const UserBookingPages = () => {
  const { bookingDetails } = useSelector((state) => state.bookingDetails);
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingDetailsAction());
  }, [dispatch]);
  return (
    <DefaultLayout>
      <h1 className="text-center mt-2">My Bookings</h1>
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookingDetails
            .filter((o) => o.user == user._id)
            .map((booking) => {
              return (
                <Row gutter={16} className="bs1 mt-3 text-left">
                  <Col lg={6} sm={24}>
                    <p>
                      <b>{booking.car.name}</b>
                    </p>

                    <p>
                      Total Hours: <b>{booking.totalHours}</b>
                    </p>
                    <p>
                      Total Rent Per Hour: <b>{booking.car.rentPerHour}</b>
                    </p>
                    <p>
                      Total Amount: <b>{booking.totalAmount}</b>
                    </p>
                  </Col>
                  <Col lg={12} sm={24}>
                    <p>
                      TransactionID: <b>{booking.transactionId}</b>
                    </p>
                    <p>
                      From: <b>{booking.bookedTimeSlots.from}</b>
                    </p>
                    <p>
                      To: <b>{booking.bookedTimeSlots.to}</b>
                    </p>
                    <p>
                      Date of Booking:
                      <b>{moment(booking.createdAt).format("MM DD yyyy")}</b>
                    </p>
                  </Col>
                  <Col lg={6} sm={24} className="text-right">
                    <img
                      style={{ borderRadius: 5 }}
                      src={booking.car.image}
                      alt=""
                      height="140"
                      className="p-2"
                    />
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default UserBookingPages;
