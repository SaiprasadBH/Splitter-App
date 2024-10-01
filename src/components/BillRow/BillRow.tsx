import React from "react";

export interface BillRowProps {
  label: string;
  value: number | string;
}

const BillRow = ({ label, value }: BillRowProps) => {
  const formattedValue = typeof value === "string" ? value : value.toFixed(2);

  return (
    <div className="flex justify-between font-bold text-[#2cc0ad] mb-8 w-full tablet:mb-16">
      <div className="font-normal text-left text-[#feffff] font-[Space Mono] text-[1rem] tablet:text-[1.25rem]">
        <span>{label}</span>
        <br />
        <span>{"/ person"}</span>
      </div>
      <span className="font-bold text-right font-[Space Mono] text-[1.5rem] tablet:text-[3rem]">
        ${formattedValue}
      </span>
    </div>
  );
};

export default BillRow;
