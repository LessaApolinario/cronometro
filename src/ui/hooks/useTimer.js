import { useEffect, useState } from 'react';

import { padZero } from '../../core/utils/padZero';

export function useTimer() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let timer;

    const tick = () => {
      if (!isPaused) {
        if (Number(seconds) > 0) {
          setSeconds(padZero(String(Number(seconds) - 1)));
        } else {
          if (Number(minutes) > 0) {
            setMinutes(padZero(String(Number(minutes) - 1)));
            setSeconds('59');
          } else {
            if (Number(hours) > 0) {
              setHours(padZero(String(Number(hours) - 1)));
              setMinutes('59');
              setSeconds('59');
            } else { 
              setIsPaused(true); 
            }
          }
        }
      }
    };

    if (!isPaused) {
      timer = setInterval(tick, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused, seconds, minutes, hours]);

  function togglePause() {
    setIsPaused(!isPaused);
  }

  function resetTimer() {
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    setIsPaused(true);
  }

  function getStartButtonText() {
    return isPaused ? 'Iniciar' : 'Pausar';
  }

  return {
    isPaused,
    seconds,
    minutes,
    hours,
    setSeconds,
    setMinutes,
    setHours,
    togglePause,
    resetTimer,
    getStartButtonText,
  };
}
