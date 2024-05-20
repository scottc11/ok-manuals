import React from "react";
import "./Header.scss";
import logo from "../../media/OK200.png";
import { Link } from "react-router-dom";
import { Row, Col } from "../Grid";

const Header: React.FC = () => {
  return (
    <Row classNames="header">
      <Col sm={12} md={3} lg={3}>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="ok200-logo" />
          </Link>
        </div>
      </Col>
      <Col md={3} lg={3}>
        <div>
          OK200 Electronic Instruments
        </div>
      </Col>
      <Col md={6} lg={6}>
        <div className="header__nav">
          <Link to="/degree">Degree</Link>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
