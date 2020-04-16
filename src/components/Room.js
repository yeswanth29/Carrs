import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultimage from "../images/room-1.jpeg";
import PropTypes from "prop-types";
function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultimage} alt="single room" />
        <div className="price-top">
          <h6>Rs{price}</h6>
          <p>per Night</p>
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

// Room.PropTypes = {
//   room: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     slug: PropTypes.arrayOf(PropTypes.string).isRequired,
//     images: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }),
// };

export default Room;
