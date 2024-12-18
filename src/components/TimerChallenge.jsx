import { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);

    function handleStart(){
        setTimerStarted(true);
        setTimeout(() => {
            setTimeExpired(true);
        }, 1000 * targetTime);
    }

    function handleStop(){
        
    }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
