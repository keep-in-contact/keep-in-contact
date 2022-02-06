import React from "react";

import { getAge } from "../lib/calc";
import Pet from "./Pet";

function People(props) {
  const age = getAge(
    new Date(props.birth.year, props.birth.month - 1, props.birth.day)
  );

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "8px" }}
    >
      <h1 style={{ marginBottom: "8px" }}>
        {props.nickname ? (
          <>
            {props.nickname}({props.name})
          </>
        ) : (
          props.name
        )}
        <small style={{ paddingLeft: "8px" }}>만 {age}세</small>
      </h1>

      {props.pets && (
        <div>
          <h2>반려 동물</h2>
          {props.pets.map((pet) => (
            <Pet {...pet} />
          ))}
        </div>
      )}

      {props.tags && (
        <div>
          {props.tags.map((tag) => (
            <span style={{ paddingRight: "4px" }}>#{tag}</span>
          ))}
        </div>
      )}

      <div>
        <small>{JSON.stringify(props, null, 2)}</small>
      </div>
    </div>
  );
}

export default People;
