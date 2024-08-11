import React, { useReducer } from "react";
import InputField from "./components/InputField/InputField";
import "./App.css";
import TipSelector from "./components/TipSelector";
import TipCalculator from "./components/TipCalculator";

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
  const amount = Number(amountValue) || 0;
  const person = Number(personValue) || 0;

  // Error messages
  const amountError =
    amountValue && amount <= 0 ? "Value must be greater than zero" : "";
  const personError =
    personValue && person < 1 ? "There must be at least one person" : "";

  // Calculations
  const tipAmount =
    selectedTip !== null && person > 0
      ? (amount * selectedTip) / 100 / person
      : 0;

  const totalAmount = person > 0 ? (amount + tipAmount * person) / person : 0;

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
    <div className="App">
      <div className="splitter">
        <span>SPLI</span>
        <span>TTER</span>
      </div>
      <div className="container">
        <div className="select-container">
          <InputField
            value={amountValue}
            typeofIcon="dollar"
            label="Bill"
            onChange={handleAmountInput}
            errorMessage={amountError}
          />
          <div className="tipSelector">
            <TipSelector onSelectTip={onSelectTip} />
            <p className="tipErrorContainer">{tipError ? tipError : ""}</p>
          </div>
          <InputField
            value={personValue}
            typeofIcon="person"
            label="Number of People"
            onChange={handlePersonInput}
            errorMessage={personError}
          />
        </div>
        <div className="tip-calculator">
          <TipCalculator
            onReset={onReset}
            tipAmount={tipAmount.toFixed(2)}
            totalAmount={totalAmount.toFixed(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
