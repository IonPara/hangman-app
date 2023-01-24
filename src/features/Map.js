import React from "react";
// Create a component that display every element from an array
const Map = ({ state }) => {
  // Create an index that will be used as key for every element
  let i = 125;
  return (
    <>
      {/* Map through the array */}
      {state.map((letter) => {
        // For every element increment the index
        i++;
        // For every element
        // return a div element with the letter as its inner text
        return (
          <div className="letter" key={i}>
            {letter}
          </div>
        );
      })}
    </>
  );
};

export default Map;
