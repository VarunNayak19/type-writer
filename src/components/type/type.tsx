import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Type = () => {
    const navigate = useNavigate();
    const [originalText] = useState(
        "The sun rose lazily over the horizon, casting hues of pink and orange across the sky. Birds chirped joyfully, greeting the new day with enthusiasm. A gentle breeze rustled the leaves on the trees, carrying with it the sweet scent of blooming flowers. The town slowly came to life as people emerged from their homes, ready to embrace the day ahead. Children laughed and played in the streets, their voices filled with innocence and delight. The aroma of freshly brewed coffee wafted from the local cafe, enticing passersby. It was a serene morning, promising warmth and possibility."
      );
      const wordsToMatch = originalText.split(' ');
      const [typedText, setTypedText] = useState('');
      const [mistakeCount, setMistakeCount] = useState(0);
      const [wordCount, setWordCount] = useState(0);
      const [timer, setTimer] = useState(60); // 60 seconds
      const [isTimerRunning, setIsTimerRunning] = useState(false);

        // Update mistake count whenever typedText changes
  useEffect(() => {
    let mistakes = 0;
    for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] !== originalText[i]) {
        mistakes++;
      }
    }
    setMistakeCount(mistakes);
  }, [typedText, originalText]);

  // Update word count whenever typedText changes
//   useEffect(() => {
//     const wordsTyped = typedText.trim().split(/\s+/);
//     setWordCount(wordsTyped.length);
//   }, [typedText]);

useEffect(() => {
    const wordsTyped = typedText.trim().split(/\s+/);
    let matchedWords = 0;
    for (let i = 0; i < wordsTyped.length; i++) {
      if (wordsTyped[i] === wordsToMatch[i]) {
        matchedWords++;
      }
    }
    setWordCount(matchedWords);
  }, [typedText, wordsToMatch]);
    
      useEffect(() => {
        let interval : any;
        if (isTimerRunning && timer > 0) {
          interval = setInterval(() => {
            setTimer((prevTimer) => {
              if (prevTimer > 0) {
                return prevTimer - 1;
              }
              clearInterval(interval);
              return prevTimer;
            });
          }, 1000);
        } else if (timer === 0) {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);
      }, [isTimerRunning, timer]);
    
      const handleInputChange = (e : any) => {
        const textTyped = e.target.value;
        setTypedText(textTyped);
      };
    
      const handleStartTimer = () => {
        setTypedText('');
        setMistakeCount(0);
        setWordCount(0);
        setTimer(60);
        setIsTimerRunning(true);
      };

     const navigateToResults = () => {
        localStorage.setItem('wordCount',JSON.stringify(wordCount));
        localStorage.setItem('mistakeCount',JSON.stringify(mistakeCount));
        alert("Alert")
        navigate("/result");
      }
    
  return (
      <div className='w-screen h-screen p-4'>
            <button className='bg-black text-white' onClick={handleStartTimer} disabled={isTimerRunning}>
                Start
            </button>
          <div className=' flex flex-col gap-4'>
              <p>Type the following:</p>
              <p>{originalText}</p>

              <textarea
              className=' border-2 border-black  rounded-md'
                  rows={4}
                  cols={50}
                  value={typedText}
                  onChange={handleInputChange}
                  disabled={timer <= 0 || !isTimerRunning} // Disable typing after the time limit is reached
              />
              {/* <p>Mistakes: {mistakeCount}</p>
              <p>Words Typed: {wordCount}</p> */}
              <p>Time Remaining: {timer} seconds</p>
          </div>
          {
            timer <= 0 && 
          <button className='bg-black text-white' onClick={navigateToResults}>
                Continue
            </button>
        }
      </div>
  )
}

export default Type;