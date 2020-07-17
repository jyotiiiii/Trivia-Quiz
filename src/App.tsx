// font-family: 'Catamaran', sans-serif;
// font - family: 'Fascinate Inline', cursive;

import React from 'react';
// Components
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz}></button>
      <p className="score">Score:</p>
      <p className="">Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
