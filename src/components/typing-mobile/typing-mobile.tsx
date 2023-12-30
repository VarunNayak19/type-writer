import React, { useState } from 'react';
import "./typing-test.scss"
const TypingTest = () => {
  const [text, setText] = useState('The sun rose lazily over the horizon, casting hues of pink and orange across the sky. Birds chirped joyfully, greeting the new day with enthusiasm. A gentle breeze rustled the leaves on the trees, carrying with it the sweet scent of blooming flowers. The town slowly came to life as people emerged from their homes, ready to embrace the day ahead. Children laughed and played in the streets, their voices filled with innocence and delight. The aroma of freshly brewed coffee wafted from the local cafe, enticing passersby. It was a serene morning, promising warmth and possibility.');
  const [typedText, setTypedText] = useState('');
  const handleChange = (event:any) => {
    setTypedText(event.target.value);
  };

  return (
    <div className="typing-test">
      <div className="typing-overlay">{text}</div>
      <textarea
        className="typing-area"
        onChange={handleChange}
        value={typedText}
        
      />
    </div>
  );
};

export default TypingTest;