import React, { PureComponent } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import FeaturedRooms from "../components/featuredRooms";
import SimpleButton from "../components/StyledHero";
function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Luxorias rooms" subtitle="Delux rooms starting at 3000">
          <Link to="/rooms" className="btn-primary">
            our Rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </div>
  );
}

export default Home;
