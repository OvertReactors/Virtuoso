import React, { Component } from "react";
import styles from "./Schedule.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";

import { BrowserRouter as Router } from "react-router-dom";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { INITIAL_EVENTS } from "./event-utils";
import events from "./event-utils";

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className={styles.mainContainer}>
          <FullCalendar
            // Sets height of calendar, including header and footer.
            height="100%"
            // Immediately forces the calendar to readjusts its size.
            updateSize={true}
            // If the rows of a given view don’t take up the entire height, they will expand to fit.
            expandRows={true}
            // Determines if week numbers should be displayed on the calendar.
            weekNumbers={true}
            // the number of events will be limited to the height of the day cell.The rest will show up in a popover.
            dayMaxEvents={true}
            // Loads Calendar Theme.
            themeSystem="bootstrap"
            // initial view when the calendar loads.
            initialView="dayGridMonth"
            // Defines buttons and title at top of the calendar.
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            //Installed Calendar Plugins.
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialEvents={INITIAL_EVENTS}
            // alternatively, use `events` setting to fetch from a feed
            // events={events}
          />
        </div>
        <Sidebar />
      </Router>
    );
  }
}

export default Schedule;
