import { useState } from 'react';
import './App.css';

const messages = [
  'Learn React',
  'Apply for jobs',
  'Invest your new income'
];

function App() {
  const [stepNumber, setStepNumber] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const handlePrevious = () => {
    if(stepNumber > 1) setStepNumber(stepNumber - 1)
  }
  const handleNext = () => {
    if(stepNumber < 3) setStepNumber(stepNumber + 1)
  }

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    setStepNumber(1)
  }

  return (
    
    <div className="steps">
      {isOpen && <button className='close' onClick={handleOnClick}>&times;</button>}
      {!isOpen &&<button className='close' onClick={handleOnClick}>&#43;</button>}
      {isOpen && <div className='card'>
        <div className='numbers'>
          <div className={stepNumber >= 1 ? 'active': 'inactive'}>1</div>
          <div className={stepNumber >= 2 ? 'active': 'inactive'}>2</div>
          <div className={stepNumber >= 3 ? 'active': 'inactive'}>3</div>
        </div>
        <p className='message'>Step {stepNumber}: {messages[stepNumber-1]}</p>
        <div className='buttons'>
          <button className='previous' onClick={handlePrevious}>Previous</button>
          <button className='next' onClick={handleNext}>Next</button>
        </div>
      </div>}
    </div>
  );
}

export default App;
