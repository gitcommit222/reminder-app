import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Reminder = ({ reminder }) => {
  return (
    <Card>
      <Card.Header as="h5">Reminder</Card.Header>
      <Card.Body>
        <Card.Title>{reminder.title}</Card.Title>
        <Card.Text>{reminder.message}</Card.Text>
        <Card.Text>
          {moment(reminder.endDate).format("MMMM DD, YYYY")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Reminder;
