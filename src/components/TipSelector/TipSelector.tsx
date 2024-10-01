import React, { useState } from "react";

import "../../global.css";
import "../../variables.css";

export interface TipSelectorProps {
  onSelectTip: (tip: number) => void;
}

export const TipSelector: React.FC<TipSelectorProps> = ({ onSelectTip }) => {
  const tips = [5, 10, 15, 25, 50] as const;
  const [customTip, setCustomTip] = useState<number | null>(null);

  const handleTipButtonClick = (tip: number) => {
    setCustomTip(null);
    onSelectTip(tip);
  };

  const handleCustomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCustomTip(value);
    onSelectTip(value);
  };

  return (
    <div className="bg-white grid pt-4 w-full  ">
      <label className=" text-[#5d6b6c] font-bold mb-6 block lg:text-[1.5rem] phone:text-[1.2rem] sm:text-[1.2rem] laptop:text-[1.4rem] tablet:text-[1.4rem]">
        Select Tip %
      </label>
      <div className="grid w-full lg:grid-cols-3 gap-2.5 lg:gap-2.5  laptop:grid-cols-3 laptop:gap-2.5 tablet:grid-cols-3 tablet:gap-2.5 phone:grid-cols-2 phone:gap-4 sm: grid-cols-2 gap-4">
        {tips.map((tip) => (
          <button
            key={tip}
            className="tracking-wider hover:bg-[#26c2ad] active:bg-[#26c2ad] lg:text-[2rem] tablet:text-[2rem] laptop:text-[2rem] focus:bg-[#26c2ad]  font-bold bg-[#00474b] sm:text-[1.5rem] phone:text-[1.5rem] text-white border-none leading-[2.9618rem] sm:leading-[2.22rem] phone:leading-[2.22rem] rounded-lg cursor-pointer p-2.5 "
            onClick={() => handleTipButtonClick(tip)}
          >
            {tip}%
          </button>
        ))}
        <input
          value={customTip !== null ? customTip : ""}
          onChange={handleCustomInput}
          type="number"
          placeholder="Custom"
          className={`bg-[#f3f8fb] placeholder:text-[1rem] text-[#5d6b6c] text-right w-full rounded-md border-transparent cursor-pointer leading-[2.3rem] text-[1.8rem] tablet:text-[1.3rem] laptop:text-[1.4rem] phone:text-[1.2rem] font-bold tracking-[0.1em] 
              focus:border-2 focus:border-[#65afa5] outline-none 
               tablet:placeholder:text-[1.3rem] laptop:placeholder:text-[1.4rem] lg:placeholder:text-[1.3rem] 
              placeholder:text-center focus:placeholder:text-right focus:placeholder:text-transparent`}
        />
      </div>
    </div>
  );
};

export default TipSelector;
