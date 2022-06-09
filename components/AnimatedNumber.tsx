import React, { useEffect, useState } from "react";

const activation = (x) => (Math.pow(x - 15, 2) / 2048) * 500 + 50;
type Props = {
  onDone: () => void;
};

const AnimatedNumber: React.FC<Props> = ({ onDone }) => {
  const [currentYear, setCurrentYear] = useState(0);
  useEffect(() => {
    let interval;
    const updateYear = () => {
      setCurrentYear((curr) => {
        if (curr === 40) {
          setTimeout(onDone, 500);
          return curr;
        }
        interval = setTimeout(updateYear, activation(curr));
        return curr + 1;
      });
    };
    setTimeout(updateYear, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{1982 + currentYear}</>;
};

export default AnimatedNumber;
