import React from "react";
import { getAge } from "../lib/calc";

function People(props) {
  return (
    <>
      <h1 style={{ marginBottom: "8px" }}>
        {props.nickname ? (
          <>
            {props.nickname}({props.name})
          </>
        ) : (
          props.name
        )}
        {props.birth && (
          <small style={{ paddingLeft: "8px" }}>
            만{" "}
            {getAge(
              new Date(props.birth.year, props.birth.month - 1, props.birth.day)
            )}
            세
          </small>
        )}
      </h1>
      {props.tags &&
        props.tags.map((tag) => (
          <span style={{ paddingRight: "4px" }}>#{tag}</span>
        ))}
      <div>
        <small>{JSON.stringify(props, null, 2)}</small>
      </div>
    </>
  );
}

export default People;
