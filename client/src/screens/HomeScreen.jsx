import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import FormContainer from "../components/FormContainer";
import Reminders from "../components/Reminders";
import { useDispatch } from "react-redux";
import { getReminders, createReminder } from "../actions/reminders";

const HomeScreen = () => {
  const [reminderData, setReminderData] = useState({
    title: "",
    message: "",
    endDate: "",
    receivers: "",
    level: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReminders());
  }, [dispatch]);

  const clear = () => {
    setReminderData({
      title: "",
      message: "",
      endDate: "",
      receivers: "",
      level: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reminderData);
    dispatch(createReminder(reminderData));
    clear();
  };

  const handleLevelChange = (e) => {
    setReminderData({ ...reminderData, level: e.target.value });
    console.log(reminderData.level);
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <Reminders />
        </Col>
        <Col>
          <FormContainer>
            <h1 className="align-self-center">Set Reminder</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="my-2" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={reminderData.title}
                  onChange={(e) => {
                    setReminderData({ ...reminderData, title: e.target.value });
                    console.log(reminderData.title);
                  }}
                />
              </Form.Group>
              <Form.Group className="my-2" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={reminderData.message}
                  onChange={(e) =>
                    setReminderData({
                      ...reminderData,
                      message: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="my-2" controlId="endDate">
                <Form.Label>Date</Form.Label>
                <Datetime
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  closeOnSelect={true}
                />
              </Form.Group>
              <Form.Group className="my-2" controlId="endDate">
                <Form.Label>Receiver(s)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter emails separated by comma"
                  value={reminderData.receivers}
                  onChange={(e) =>
                    setReminderData({
                      ...reminderData,
                      receivers: e.target.value.split(","),
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="my-2" controlId="level">
                <Form.Label>Level</Form.Label>
                <div className="d-flex justify-content-between">
                  <Form.Check
                    name="levels"
                    type="radio"
                    id="high"
                    label="High"
                    value="High"
                    checked={reminderData.level === "High"}
                    onChange={handleLevelChange}
                  />
                  <Form.Check
                    name="levels"
                    type="radio"
                    id="mid"
                    label="Mid"
                    value="Mid"
                    checked={reminderData.level === "Mid"}
                    onChange={handleLevelChange}
                  />
                  <Form.Check
                    name="levels"
                    type="radio"
                    id="low"
                    label="Low"
                    value="Low"
                    checked={reminderData.level === "Low"}
                    onChange={handleLevelChange}
                  />
                </div>
              </Form.Group>
              <Row className="">
                <Col>
                  <Button
                    variant="danger"
                    className="mt-3 w-100"
                    onClick={clear}
                  >
                    Reset
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    className="mt-3 w-100"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
