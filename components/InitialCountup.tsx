import React, { useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";
import Image from "next/image";

import Logo from "../public/assets/images/juble40_color.svg";

const InitialCountup = () => {
  const [isDone, setIsDone] = React.useState(false);
  const [isHidden, setIsHiden] = React.useState(false);

  useEffect(() => {
    if (isDone) {
      setTimeout(() => setIsHiden(true), 2000);
      localStorage.setItem("seenAnimation", "true");
    }
  }, [isDone]);

  return (
    <div
      className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-neutral-900 transition-opacity duration-1000"
      style={{
        opacity: isHidden ? 0 : 1,
        fontFamily: "BerlinSansFBDemi-Bold, Berlin Sans FB Demi",
      }}
    >
      <div
        className="absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
        style={{ top: isDone ? "50%" : "20%", opacity: isDone ? 1 : 0 }}
      >
        <Image src={Logo} />
      </div>

      <span
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl transition-all duration-1000"
        style={{ top: isDone ? "80%" : "50%", opacity: isDone ? 0 : 1 }}
      >
        <div className="w-48 overflow-hidden">
          <AnimatedNumber onDone={() => setIsDone(true)} />
        </div>
      </span>

      {/* 
          <div
            className={
              isDone
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-100"
            }
          > */}
      {/* </div> */}
    </div>
  );
};

export default InitialCountup;
