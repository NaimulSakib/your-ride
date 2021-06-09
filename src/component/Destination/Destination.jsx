import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Destination.css";
import fakeData from "../../fakeData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faMapMarkerAlt,
  faMapMarkerAltMarkerAltfaMapMarkerAlt,
  faUser,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import map from "../../images/Map.png";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
const Destination = () => {
  const { register, handleSubmit } = useForm();
  const [pickFrom, setPickFrom] = useState("");
  const [pickTo, setPickTo] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [vehicle, setVehicle] = useState([]);
  useEffect(() =>{
    setVehicle(fakeData)
  },[])
  const onSubmit = (data) => {
    if (data.From && data.To) {
      setPickFrom(data.From);
      setPickTo(data.To);
      setIsSearch(false);
    }
  };
  let { id } = useParams();
  let rideImgId = vehicle.find(eachVehicle => eachVehicle.id === Number(id))
  

  // const handlePick = (event) => {
  //   let text = event.target.value;
  //   console.log(text)
  //   event.target.name === 'From' ? setPickFrom(text) : setPickTo(text);
  //   // console.log(event.target.name, text);
  // };
  // const handleSearch = (event) => {
  //   event.target.reset();
  //   event.preventDefault();
  // };
  return (
    <Container className="destination-style">
      <div className="route-div">
        {isSearch ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h6>Pick From</h6>
            <input
              {...register("From")} // used this for specification || this returns an object which contains value of 'From'
              required
              className="input"
              type="text"
              // name="From"  // alternative added {...register("example")}
              id=""
              // onBlur={(e) => setPickFrom(e.target.value)}
            />
            <br />
            <br />
            <h6>Pick To</h6>
            <input
              {...register("To")} // used this for specification || this returns an object which contains value of 'To'
              required
              className="input"
              type="text"
              // name="To"
              id=""
              // onBlur={(e) => setPickTo(e.target.value)}
            />
            <br />
            <br />
            <h6>Date</h6>
            <input type="date" className="my-4" className="input" />
            <input
              className="btn-danger mt-5 w-100"
              type="submit"
              value="Search"
            />
          </form>
        ) : (
          <div>
            <div className="pick-route">
              <h6>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {pickFrom}
              </h6>
              <h6>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {pickTo}
              </h6>
            </div>
            <div className="ride-choice">
            <div className="test">
              <img style={{height:'40px'}} src={rideImgId.img} alt="" srcset="" />
              <h6>{rideImgId.name}   <FontAwesomeIcon icon={faUser} /> 1 </h6>
              <h6>$50</h6>
            </div>
            <div className="test">
              <img style={{height:'40px'}} src={rideImgId.img} alt="" srcset="" />
              <h6>{rideImgId.name} <FontAwesomeIcon icon={faUserFriends} /> 2 </h6>
              <h6>$70</h6>
            </div>
            <div className="test">
              <img style={{height:'40px'}} src={rideImgId.img} alt="" srcset="" />
              <h6>{rideImgId.name} <FontAwesomeIcon icon={faUsers} /> 4 </h6>
              <h6>$90</h6>
            </div>
          </div>
            </div>
        )}
      </div>
      <div>
        <img className="map px-5" src={map} alt="map" />
      </div>
    </Container>
  );
};

export default Destination;
