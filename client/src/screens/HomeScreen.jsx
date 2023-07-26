import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import FormContainer from "../components/FormContainer";
import Reminders from "../components/Reminders";
import { useDispatch } from "react-redux";
import { getReminders } from "../actions/reminders";

const HomeScreen = () => {
  const [reminderData, setReminderData] = useState({
    title: "",
    message: "",
    endDate: "",
    endTime: "",
    receivers: "",
    level: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReminders());
  }, [dispatch]);

  const handleSubmit = () => {};
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
            <h1>Set Reminder</h1>
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
                <Row>
                  <Col>
                    <Form.Label>Date</Form.Label>
                    <Datetime
                      dateFormat="YYYY-MM-DD"
                      timeFormat={false}
                      value={reminderData.endDate}
                      onChange={(e) =>
                        setReminderData({
                          ...reminderData,
                          endDate: e.target.value,
                        })
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Label>Time</Form.Label>
                    <Datetime
                      dateFormat={false}
                      timeFormat="HH:mm A"
                      value={reminderData.endTime}
                      onChange={(e) =>
                        setReminderData({
                          ...reminderData,
                          endTime: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Row>
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
                  <Button variant="danger" className="mt-3 w-100">
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
