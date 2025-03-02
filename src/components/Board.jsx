import React from "react";
import { HexGrid, Layout, Hexagon, Text, Pattern } from "react-hexgrid";
import "./Board.css";

const getBackgroundColor = (resource) => {
  switch (resource) {
    case 0:
      return "#b17b2c"; // dessert
    case 1:
      return "#044f09"; // wood
    case 2:
      return "#facb00"; // wheat
    case 3:
      return "#7dc95f"; // sheep
    case 4:
      return "#ad2b00"; // brick
    case 5:
      return "#a1a3a1"; // ore
    default:
      return "#ff9800"; // default white
  }
};

const hexData = [
  { resource: 3, value: 5, q: -2, r: 0, s: 2 },
  { resource: 3, value: 2, q: -2, r: 1, s: 1 },
  { resource: 4, value: 6, q: -2, r: 2, s: 0 },
  { resource: 4, value: 3, q: -1, r: -1, s: 2 },
  { resource: 5, value: 8, q: -1, r: 0, s: 1 },
  { resource: 4, value: 10, q: -1, r: 1, s: 0 },
  { resource: 2, value: 9, q: -1, r: 2, s: -1 },
  { resource: 2, value: 12, q: 0, r: -2, s: 2 },
  { resource: 3, value: 11, q: 0, r: -1, s: 1 },
  { resource: 1, value: 4, q: 0, r: 0, s: 0 },
  { resource: 1, value: 8, q: 0, r: 1, s: -1 },
  { resource: 2, value: 10, q: 0, r: 2, s: -2 },
  { resource: 1, value: 9, q: 1, r: -2, s: 1 },
  { resource: 5, value: 4, q: 1, r: -1, s: 0 },
  { resource: 3, value: 5, q: 1, r: 0, s: -1 },
  { resource: 1, value: 6, q: 1, r: 1, s: -2 },
  { resource: 0, value: 0, q: 2, r: -2, s: 0 },
  { resource: 2, value: 3, q: 2, r: -1, s: -1 },
  { resource: 5, value: 11, q: 2, r: 0, s: -2 },
];

const Board = () => {
  return (
    <HexGrid width={800} height={600}>
      <Layout size={{ x: 10, y: 10 }} origin={{ x: 0, y: 0 }} spacing={1.05}>
        {hexData.map(({ resource, value, q, r, s }) => (
          <Hexagon
            q={q}
            r={r}
            s={s}
            style={{
              fill: getBackgroundColor(resource),
              stroke: "#ffffff",
              strokeWidth: 0.5,
            }}
          >
            <Text
              style={{ fontSize: "4px", color: "#ffffff" }}
            >{`${value}`}</Text>
          </Hexagon>
        ))}
      </Layout>
    </HexGrid>
  );
};

export default Board;
