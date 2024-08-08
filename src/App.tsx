import React, { useReducer } from "react";
import InputField from "./components/InputField/InputField";
import "./App.css";
import TipSelector from "./components/TipSelector";
import TipCalculator from "./components/TipCalculator";

interface State {
  amountValue: number;
  personValue: number;
  selectedTip: number | null;
  tipError: string;
}

type Action =
  | { type: "SET_AMOUNT"; payload: number }
  | { type: "SET_PERSON"; payload: number }
  | { type: "SET_TIP"; payload: number }
  | { type: "SET_TIP_ERROR"; payload: string }
  | { type: "RESET" };

const initialState: State = {
  amountValue: 0,
  personValue: 1,
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

  const amountError = amountValue <= 0 ? "Value must be greater than zero" : "";
  const personError =
    personValue < 1 ? "There must be at least one person" : "";

  const tipAmount =
    selectedTip !== null && personValue > 0
      ? (amountValue * selectedTip) / 100 / personValue
      : 0;

  const totalAmount =
    personValue > 0 ? (amountValue + tipAmount * personValue) / personValue : 0;

  const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_AMOUNT",
      payload: Number(event.target.value),
    });
  };

  const handlePersonInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_PERSON",
      payload: Number(event.target.value),
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
    dispatch({ type: "SET_TIP", payload: Number(tip) });
  };

  const onReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="App">
      <div className="splitter">
        <p className="first-part">SPLI</p>
        <p className="second-part">TTER</p>
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
          <div>
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
        <div className="resetDiv">
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
