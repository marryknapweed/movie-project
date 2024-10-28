import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { CardMovie } from "../cardMovie";
import "./index.scss";

export const Recommendations = () => {
  return (
    <div className="recommendations">
      <div className="recommendations__header">
        <h3 className="recommendations__title">Recommendations</h3>
        <div className="recommendations__arrow">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>

      <div className="recommendations__list">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </div>
    </div>
  );
};
