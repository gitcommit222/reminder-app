import React from "react";
import Reminder from "./Reminder";
import { useSelector } from "react-redux";

const Reminders = () => {
  const reminders = useSelector((state) => state.reminders);
  return (
    <div className="d-flex justify-content-md-center flex-wrap mt-5 gap-3 mx-5">
      {reminders &&
        reminders.map((reminder) => <Reminder reminder={reminder} />)}
    </div>
  );
};

export default Reminders;
