import React from "react";
// Import all of the components and functions
import { randomWord, hyphens } from "./randomWord";
import Map from "./Map";
import Alphabet from "./Alphabet";
import dictionaryArray from "./words";
import Help from "./Help";
// Import useState Hook
import { useState, useEffect } from "react";
// Import all of the images
import state1 from "../hangmanDrawings/state1.GIF";
import state2 from "../hangmanDrawings/state2.GIF";
import state3 from "../hangmanDrawings/state3.GIF";
import state4 from "../hangmanDrawings/state4.GIF";
import state5 from "../hangmanDrawings/state5.GIF";
import state6 from "../hangmanDrawings/state6.GIF";
import state7 from "../hangmanDrawings/state7.GIF";
import state8 from "../hangmanDrawings/state8.GIF";
import state9 from "../hangmanDrawings/state9.GIF";
import state10 from "../hangmanDrawings/state10.gif";
import state11 from "../hangmanDrawings/state11.GIF";
import Button from "react-bootstrap/esm/Button";
// Add the images to an array
const images = [
  state1,
  state2,
  state3,
  state4,
  state5,
  state6,
  state7,
  state8,
  state9,
  state10,
  state11,
];
// Create a variable tha will store the random
let newRandWord = randomWord(dictionaryArray);
// Create a variable that will store the array with the hyphens
let hyphen = hyphens(newRandWord);

// Create a wordGuess component
const WordGuess = () => {
  // Destructure useState for the state of hyphen
  const [state, setState] = useState(hyphen);
  const [counter, setCounter] = useState(0);
  const [hint, setHint] = useState(3);
  const [id, setId] = useState([]);

  // Destructure useState for the state of the images
  const [image, setImage] = useState(images[0]);
  // Destructure useState an set it to 1, we will use this as an index
  const [imgIndex, setImgIndex] = useState(1);
  // Create a state for winning score and a state for loosing score, destructure the useState
  const [winningScore, setWinningScore] = useState(0);
  const [loosingScore, setLoosingScore] = useState(0);
  // Create a state for result and a state for display, destructure the useState
  const [result, setResult] = useState(true);
  const [display, setDisplay] = useState(false);

  // If the state as a string is equal to newRandWord as a string
  useEffect(() => {
    if (state.join("") === newRandWord.join("")) {
      // Set display and result to true
      setDisplay(true);
      setResult(true);
      setCounter(0);
      // Set the state as hyphen in an array so we avoid the infinite loop
      setState([hyphen]);
      // If the imgIndex state is equal to 10
      // Set display to true and  set result to false
    } else if (imgIndex === 11) {
      setState([newRandWord]);
      setDisplay(true);
      setResult(false);
      setCounter(0);
    }
  }, [imgIndex, counter]);

  // Create a handleResult hook that will reset all of the states and increment the loosing or winning score
  // depending on the button clicked
  const handleResult = (e) => {
    const button = e.target.innerText;
    // Change the value of the newRandWord with a new random word
    newRandWord = randomWord(dictionaryArray);
    hyphen = hyphens(newRandWord);
    setState(hyphen.map((l) => l));

    setImgIndex(1);
    setImage(images[0]);
    setDisplay(false);

    if (button === "Continue") {
      if (imgIndex === 11) {
        setLoosingScore((prev) => prev + 1);
      } else {
        setWinningScore((prev) => prev + 1);
      }
      setId([]);
    } else {
      setLoosingScore(0);
      setWinningScore(0);
      setHint(3);
      setId([]);
    }
  };
  // Create a handleClick hook that will display the letter of change the image depending on the button clicked
  const handleClick = (e) => {
    const button = e.target.innerText;
    // Loop through the random word array
    // For every letter in the array
    // If the letter is equal to the letter from the button
    // Change the item from the hyphen array with the letter
    // Reset the state with an updated value
    newRandWord.forEach((letter, index) => {
      if (button === letter) {
        hyphen[index] = letter;
        setState(hyphen.map((l) => l));
        setCounter((prev) => prev + 1);
      }
    });

    // If the radom word array doesn't include the letter
    // Change the next image
    if (!newRandWord.includes(button)) {
      setImage(images[imgIndex]);
      setImgIndex((prev) => prev + 1);
    }
  };

  const handleHint = () => {
    for (let i = 0; i < newRandWord.length; i++) {
      let letter = newRandWord[i];
      if (state[i] !== letter && hint) {
        // eslint-disable-next-line no-loop-func
        newRandWord.forEach((l, index) => {
          if (letter === l) {
            hyphen[index] = letter;
            setState(hyphen.map((l) => l));
          }
        });
        setCounter((prev) => prev + 1);
        break;
      }
    }
  };

  return (
    <div className="game-container">
      {/* If display state is true set the className to show else set the className to hide */}
      <div className={display ? "show" : "hide"}>
        {/* If result state is true set the innerText to "You Won!" else set it to "You Lost!" */}
        <div>{result ? "You Won!" : "You Lost!"}</div>
        <div className="result-buttons">
          {/* Add 2 Button components with the handleResult hook on click */}
          <Button onClick={handleResult}>Restart</Button>
          <Button onClick={handleResult}>Continue</Button>
        </div>
      </div>
      <div className="description">
        <div className="heading">
          {/* Add the Help component */}
          <div className="hint-container d-flex">
            <Help />
            <Button
              onClick={() => {
                hint > 0 ? setHint((prev) => prev - 1) : setHint(0);
                handleHint();
              }}
              className="help-button bg-success text-white"
              disabled={!hint ? true : false}
            >
              Hint
            </Button>
          </div>
          <h2>Hangman</h2>
        </div>
        <div className="score">
          <h3>Score</h3>
          {/* Create two h4 headings with the values from winning and loosing score states */}
          <h4 className="wins">
            Wins <span>{winningScore}</span>
          </h4>
          <h4 className="loses">
            Losses<span>{loosingScore}</span>
          </h4>
          <h4 className="text-success">
            Hints <span>{hint}</span>
          </h4>
        </div>
      </div>
      <div className="game-half-container">
        <img className="image" src={image} alt="Hangman" />
        <div className="words-container">
          <div className="random-word">
            {/* Add the Map component with state as its property value */}
            <Map state={state} />
          </div>
          {/* Add the Alphabet component with the handleCLick on click event listener */}
          <Alphabet id={id} setId={setId} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default WordGuess;
