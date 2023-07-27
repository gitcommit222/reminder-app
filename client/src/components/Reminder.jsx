import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const Reminder = ({ reminder }) => {
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Header
        as="h4"
        className="d-flex justify-content-between align-items-center"
      >
        Reminder
        <div className="d-flex justify-content-between align-items-center gap-1">
          <Button
            variant="primary"
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center align-items-center"
          >
            <BsFillPencilFill size={13} />
          </Button>
          <Button
            variant="danger"
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center align-items-center"
          >
            <BsFillTrashFill size={13} />
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{reminder.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {reminder.message}
        </Card.Text>
        <Card.Text>
          {moment(reminder.endDate).format("MMMM DD, YYYY")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Reminder;
