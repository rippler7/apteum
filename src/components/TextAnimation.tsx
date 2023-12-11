import React, { useState, useEffect } from 'react';
import './TextAnimation.css'; // Import the CSS file for styling

const sentences = [
  ' This is text one',
  ' This is text two',
  ' This is text three',
  ' This is text four',
];

const TextAnimation: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [showText, setShowText] = useState<boolean>(true);
  
    useEffect(() => {
      const typeText = () => {
        if (currentIndex < sentences.length) {
          const currentSentence = sentences[currentIndex];
          let charIndex = 0;
  
          const typeChar = () => {
            if (charIndex < currentSentence.length) {
              setText((prevText) => prevText + currentSentence.charAt(charIndex));
              charIndex += 1;
              setTimeout(typeChar, 10); // Adjust typing speed here (milliseconds)
            } else {
              setTimeout(() => {
                setShowText(false); // Start fade-out effect
              }, 7000); // Interval before fading out
            }
          };
  
          typeChar(); // Start typing current sentence
        }
      };
  
      typeText(); // Start the initial typing animation
  
      return () => {
        setText('');
      };
    }, [currentIndex]);
  
    // Reset the component state for the next sentence
    useEffect(() => {
      if (!showText) {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setShowText(true);
        }, 10); // Interval before moving to the next sentence
      }
    }, [showText]);
  
    return (
      <div className="text-container">
        <div className={`animated-text ${showText ? '' : 'fade-out'}`}>{text}</div>
      </div>
    );
  };
  
  export default TextAnimation;