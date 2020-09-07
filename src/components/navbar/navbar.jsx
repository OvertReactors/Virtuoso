import React, { Component } from "react";
import { BrowserRouter as Navlink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <section className={styles.navContainer}>
        <Link to="/profile">
          <div className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faUser}
              size="2x"
            />
          </div>
        </Link>{" "}
        <Link to="/webinars">
          <div className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faUsers}
              size="2x"
            />
          </div>
        </Link>{" "}
        <Link to="/schedule">
          <div className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faCalendarAlt}
              size="2x"
            />
          </div>
        </Link>{" "}
        <Link to="/create">
          <div className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faVideo}
              size="2x"
            />
          </div>
        </Link>{" "}
        <Link to="/stats">
          <div className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faChartPie}
              size="2x"
            />
          </div>
        </Link>{" "}
      </section>
    );
  }
}

export default Navbar;
