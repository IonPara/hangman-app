import React from "react";
import Button from "react-bootstrap/Button";

// Create an component that will display all of the letters from the alphabet as buttons
const Alphabet = ({ handleClick, id, setId }) => {
  // Use char codes to create the array with all of the letters from the alphabet
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  // map through the array
  const letterButton = alphabet.map((letter, index) => (
    // For every letter return a Button component with the handleClick from the props
    <Button
      onClick={(e) => {
        setId([...id, index]);
        handleClick(e);
      }}
      className="letter-button rounded-circle "
      key={index}
      disabled={id.includes(index) ? true : false}
    >
      {letter}
    </Button>
  ));
  return <div className="buttons">{letterButton}</div>;
};
// Export the component
export default Alphabet;
