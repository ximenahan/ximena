import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Card() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true); // Track if placeholder should be visible
  const cardRef = useRef(null);

  const handleTextChange = (event) => {
    // Check if there's any input value
    setIsPlaceholderVisible(event.target.textContent === '');
  };

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseDown = (event) => {
      const shiftX = event.clientX - card.getBoundingClientRect().left;
      const shiftY = event.clientY - card.getBoundingClientRect().top;

      const handleMouseMove = (moveEvent) => {
        setPosition({
          x: moveEvent.clientX - shiftX,
          y: moveEvent.clientY - shiftY,
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    card.addEventListener('mousedown', handleMouseDown);

    return () => {
      card.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div
      className="card"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ref={cardRef}
    >
      <div
        contentEditable="true"
        className="editable-text"
        onInput={handleTextChange} // Handle input event to track text changes
      >
        {isPlaceholderVisible && <span className="placeholder">type here</span>}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
