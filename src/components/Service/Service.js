import React from "react";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faUser,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

function Service() {
  return (
    <div className="service-container">
      <div className="content-container">
        <p className="heading"> Services</p>

        <div className="container-service">
          <p className="heading1">Catering Services</p>
          <div className="paragraph-container">
            <div className="paragraph">
              <span className="Icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <p style={{ color: "black", fontWeight: "bold" }}>
                Birthday Party
              </p>
              <p>
                Even the all-powerful painting has no control about the blind
                text it is an almost unorthographic.
              </p>
            </div>
            <div className="paragraph">
              <span className="Icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <p style={{ color: "black", fontWeight: "bold" }}>
                Business Meeting
              </p>
              <p>
                Even the all-powerful painting has no control about the blind
                text it is an almost unorthographic.
              </p>
            </div>
            <div className="paragraph">
              <span className="Icon">
                <FontAwesomeIcon icon={faWandMagicSparkles} />
              </span>
              <p style={{ color: "black", fontWeight: "bold" }}>
                Wedding Party
              </p>
              <p>
                Even the all-powerful painting has no control about the blind
                text it is an almost unorthographic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
