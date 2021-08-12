import React from "react";
import AppData from "./AppData";
import TheFallen from "./TheFallen";
import ComingSoon from "../images/spiderman-poster.jpg";

function Content(){
    return(
        <section className="Content col-sm-12">
        <div className="container col-centered">
          <div className="twitter-feed">
            <AppData  />  
          </div>
        </div>
        <div className="related-movies">
          <div className="container">
            <h2>Underated Film!</h2>
            <div className="parent">
              <div className="child col-sm-3">
                <img className="img-responsive" src={ComingSoon} alt="Spiderman: Far from Home is coming out this summer!" />
              </div>
            </div>
          </div>
        </div>
        <div className="related-movies avenge">
          <TheFallen />
        </div>
      </section>
    );
}

export default Content;