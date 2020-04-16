import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";
class RoomsAll extends Component {
  static contextType = RoomContext;
  render() {
    let {
      loading,
      featuredRooms: rooms,
      nonfeaturedRooms: nonrooms,
    } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    nonrooms = nonrooms.map((room) => {
      return <Room Key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms"></Title>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
        <Title title="Non Featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : nonrooms}
        </div>
      </section>
    );
  }
}

export default RoomsAll;
