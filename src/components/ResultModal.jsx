import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ remainingTime, targetTime, ref, onReset }) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); //o toFixed(2) é para limitar a 2 casas decimais
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>  {/* onClose é um evento que é disparado quando o dialog é fechado */}
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stoped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
