import BillRow from "../BillRow";
import { useEffect, useState } from "react";

export interface TipCalculatorProp {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
}

export function TipCalculator({
  onReset,
  tipAmount,
  totalAmount,
}: TipCalculatorProp) {
  const [isResetDisabled, setIsResetDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsResetDisabled(Number(totalAmount) <= 0 || isNaN(Number(totalAmount)));
  }, [totalAmount]);

  return (
    <div className="flex flex-col justify-between bg-[#00474b] text-white rounded-xl p-4 phone:p-5 tablet:p-6 laptop:p-7 w-full h-full box-border font-[Space Mono] flex-grow">
      <div className="flex flex-col w-full box-border">
        <BillRow label="Tip Amount" value={tipAmount} />
        <BillRow
          label="Total"
          value={`${isNaN(Number(totalAmount)) ? "--" : Number(totalAmount)}`}
        />
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={onReset}
          disabled={isResetDisabled}
          className={`w-full text-[#00474b] font-bold text-center py-3 rounded-md tracking-wide
            ${isResetDisabled ? "bg-[#0d686d]" : "bg-[#2cc0ae] hover:bg-[#26b39c] cursor-pointer"}
            text-[1rem] tablet:text-[1.2rem] laptop:text-[1.3rem]`}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default TipCalculator;
