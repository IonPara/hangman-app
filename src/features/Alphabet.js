import React from "react";
import Button from "react-bootstrap/Button";
// Create an component that will display all of the letters from the alphabet as buttons
const Alphabet = ({ handleClick }) => {
  // Use char codes to create the array with all of the letters from the alphabet
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  // map through the array
  const letterButton = alphabet.map((letter) => (
    // For every letter return a Button component with the handleClick from the props
    <Button
      onClick={handleClick}
      className="letter-button rounded-circle "
      key={alphabet.indexOf(letter)}
    >
      {letter}
    </Button>
  ));
  return <div className="buttons">{letterButton}</div>;
};
// Export the component
export default Alphabet;
