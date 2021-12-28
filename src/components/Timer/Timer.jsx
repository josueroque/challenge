import React, { useEffect, useState } from "react";
const Timer = ({ setLoading, loadMembers }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive] = useState(true);

  useEffect(() => {
    if (seconds === 120) {
      setLoading(true);
      setTimeout(() => {
        loadMembers();
        setLoading(false);
      }, 1500);
      setSeconds(0);
    }
  }, [loadMembers, setLoading, seconds]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className='app'>
      <div className='time'>{seconds}s</div>
      <div className='row'></div>
    </div>
  );
};

export default Timer;
