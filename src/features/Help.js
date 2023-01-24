import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

// Create a component that will display an alert with the rules
function Help() {
  // Destructure the useState
  const [show, setShow] = useState(false);

  return (
    <div className="help">
      {/* Add the alert component from bootstrap */}
      <Alert className="help-alert" show={show} variant="success">
        {/* Add alert's heading */}
        <Alert.Heading>How to Play?</Alert.Heading>
        {/* Create a paragraph that will describe the rules */}
        <p>
          Hangman is a simple word guessing game. The player has to try to
          figure out the unknown word by guessing letters. If too many letters
          which do not appear in the word are guessed, the player is hanged (and
          loses).
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          {/* Add a button component that will setShow to false and hide the alert */}
          <Button
            className="help-button"
            onClick={() => setShow(false)}
            variant="outline-success"
          >
            Close!
          </Button>
        </div>
      </Alert>

      {!show && (
        // Add a button component that will setShow to true and display the alert
        <Button
          className="help-button bg-warning"
          onClick={() => setShow(true)}
        >
          Help
        </Button>
      )}
    </div>
  );
}

export default Help;
