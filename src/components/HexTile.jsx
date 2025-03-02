import React from "react";
import "./Hextile.css";

const HexTile = ({ resource, value, x, y }) => {
  const getResourceName = (resource) => {
    switch (resource) {
      case 1:
        return "Wood";
      case 2:
        return "Sheep";
      case 3:
        return "Wheat";
      case 4:
        return "Brick";
      case 5:
        return "Ore";
      case 0:
        return "Desert";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="hex-tile">
      <div className="hexagon">
        <div className="hex-content">
          <p>{getResourceName(resource)}</p>
          <p>Value: {value}</p>
        </div>
      </div>
    </div>
  );
};

export default HexTile;
