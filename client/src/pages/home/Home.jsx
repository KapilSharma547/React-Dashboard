import React from "react";
import TopBox from "../../components/topBox/TopBox";
import { chartBoxUser } from "../../data";
import ChartBox from "../../components/chartBox/ChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
    </div>
  );
};

export default Home;
