import React, { useReducer } from "react";
import InputField from "./components/InputField/InputField";
import "./App.css";
import TipSelector from "./components/TipSelector";
import TipCalculator from "./components/TipCalculator";
import "./global.css";
// import "./variables.css";

interface State {
  amountValue: string;
  personValue: string;
  selectedTip: number | null;
  tipError: string;
}

type Action =
  | { type: "SET_AMOUNT"; payload: string }
  | { type: "SET_PERSON"; payload: string }
  | { type: "SET_TIP"; payload: number }
  | { type: "SET_TIP_ERROR"; payload: string }
  | { type: "RESET" };

const initialState: State = {
  amountValue: "",
  personValue: "",
  selectedTip: null,
  tipError: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_AMOUNT":
      return { ...state, amountValue: action.payload };
    case "SET_PERSON":
      return { ...state, personValue: action.payload };
    case "SET_TIP":
      return { ...state, selectedTip: action.payload, tipError: "" };
    case "SET_TIP_ERROR":
      return { ...state, tipError: action.payload };
    case "RESET":
      return initialState;
    default:
      throw new Error("Unhandled action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { amountValue, personValue, selectedTip, tipError } = state;

  // Convert values to numbers only if they're not empty
  const amount = Number(amountValue) || "";
  const person = Number(personValue) || "";

  // Error messages
  const amountError =
    amountValue && Number(amount) <= 0 ? "Value must be greater than zero" : "";
  const personError =
    personValue && Number(person) < 1
      ? "There must be at least one person"
      : "";

  // Calculations
  const tipAmount =
    selectedTip !== null && Number(person) > 0
      ? (Number(amount) * selectedTip) / 100 / Number(person)
      : "--";

  const totalAmount =
    Number(person) > 0
      ? (Number(amount) + Number(tipAmount) * Number(person)) / Number(person)
      : "--";

  const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_AMOUNT",
      payload: event.target.value,
    });
  };

  const handlePersonInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_PERSON",
      payload: event.target.value,
    });
  };

  const onSelectTip = (tip: number) => {
    if (tip < 0) {
      dispatch({
        type: "SET_TIP_ERROR",
        payload: "Tip percentage cannot be negative",
      });
      return;
    }
    dispatch({ type: "SET_TIP", payload: tip });
  };

  const onReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#c5e4e7]">
      <div className="tracking-[0.47rem] text-center flex flex-col justify-center items-center text-2xl font-bold text-[#00474b] my-5 ">
        <span>SPLI</span>
        <span>TTER</span>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-5 w-full max-w-5xl p-6 bg-white rounded-xl box-border">
        <div className="flex flex-col items-center w-full">
          <InputField
            value={amountValue}
            typeofIcon="dollar"
            label="Bill"
            onChange={handleAmountInput}
            errorMessage={amountError}
          />
          <div className="h-5"></div>
          <div className="w-full max-w-xl mb-5">
            <TipSelector onSelectTip={onSelectTip} />
            <p className="min-h-[2.75rem] text-[rgb(197,147,128)] text-[0.7rem] lg:text-[1rem] laptop:text-[1rem] tablet:text-[1rem] text-right tablet:text-center mt-1 pb-5 leading-[1.5] sm:text-[]">
              {tipError ? tipError : ""}
            </p>
          </div>
          <InputField
            value={personValue}
            typeofIcon="person"
            label="Number of People"
            onChange={handlePersonInput}
            errorMessage={personError}
          />
        </div>
        <div className="w-full">
          <TipCalculator
            onReset={onReset}
            tipAmount={`${tipAmount.toString()}`}
            totalAmount={totalAmount.toString()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
