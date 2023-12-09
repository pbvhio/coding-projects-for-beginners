import React from "react";

export default function GameModal({ winner, reset }) {
  const messages = {
    "x": "X wins the game!",
    "o": "O wins the game!",
    "draw": "It's a draw!"
  };

  if (!winner) return <></>

  return (
    <>
      {/* Overlay */}
      <div style={{
        position: 'fixed', // Fixed position
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        zIndex: 999, // Below the modal, but above everything else
      }}></div>

      {/* Modal */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '200px',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        zIndex: 1000, // Ensure it's above the overlay
      }}>
        <h2>{messages[winner]}</h2>
        <button onClick={reset}>Play again</button>
      </div>
    </>
  );
}