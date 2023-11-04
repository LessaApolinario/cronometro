import { useEffect, useState } from 'react';

import { padZero } from '../../core/utils/padZero';

export function useStopwatch() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const almostAnHour = Number(minutes) === 59;
    if (almostAnHour) {
      setHours(padZero(String(Number(hours) + 1)));
      setMinutes('00');
    }
  }, [minutes]);

  useEffect(() => {
    const almostAMinute = Number(seconds) === 59;
    if (almostAMinute) {
      setMinutes(padZero(String(Number(minutes) + 1)));
      setSeconds('00');
    }
  }, [seconds]);

  useEffect(() => {
    let timer;

    if (!isPaused) {
      timer = setInterval(() => {
        setSeconds((previousSeconds) =>
          padZero(String(Number(previousSeconds) + 1))
        );
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  function togglePause() {
    setIsPaused(!isPaused);
  }

  function resetStopwatch() {
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    setIsPaused(true);
  }

  function getFormattedTime() {
    return `${hours}:${minutes}:${seconds}`;
  }

  function getStartButtonText() {
    return isPaused ? 'Iniciar' : 'Pausar';
  }

  return {
    isPaused,
    togglePause,
    resetStopwatch,
    getFormattedTime,
    getStartButtonText,
  };
}
