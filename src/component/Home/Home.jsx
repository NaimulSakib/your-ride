import React, { useEffect, useState } from "react";
import "./Home.css";
import fakeData from "../../fakeData.json";
// import { Col, Container, Row } from 'react-bootstrap';
import Card from "../Card/Card";
import { Navbar } from "react-bootstrap";

const Home = () => {
  const [ride, setRide] = useState([]);
  useEffect(() => {
    setRide(fakeData);
  }, []);
  return (
    <div className="background">
      {
        ride.map(eachRide => <Card eachRide={eachRide}></Card>)
      }
    </div>
  );
};

export default Home;
