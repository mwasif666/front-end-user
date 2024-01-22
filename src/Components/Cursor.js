// AnimatedCursor.js
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-55%, -60%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Cursor = styled.div`
  position: fixed;
  width: 24px;
  height: 24px;
  border: 2px solid #333;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  animation: ${pulse} 1s infinite;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: "20px" });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return <Cursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;
