import React, { useEffect, useState } from 'react'

const Match = () => {
    const [mistakeCount, setmistakeCount] = useState(0);
    const [wordCount, setwordCount] = useState(0);
    useEffect(() => {
        const mistakeCount = JSON.parse(localStorage.getItem('mistakeCount') || "");
        const wordCount =  JSON.parse(localStorage.getItem('wordCount') || "");
        setmistakeCount(mistakeCount);
        setwordCount(wordCount);

    }, [])
  return (
    <div>
        <p>Mistakes: {mistakeCount}</p>
        <p>Words Typed: {wordCount}</p>
    </div>
  )
}

export default Match;