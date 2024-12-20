import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ remainingTime, targetTime, ref, onReset }) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); //o toFixed(2) é para limitar a 2 casas decimais

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost!</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stoped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
