import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/Herobanner";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/trending";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular/>
            <TopRated/>
        </div>
    );
};

export default Home;