import React from "react";
import styles from "./InputField.module.css";

export interface InputFieldProps extends React.ComponentProps<"input"> {
  /**
   * Input label
   */
  label: string;
  /**
   * Icon type
   */
  typeofIcon: "person" | "dollar";
  /**
   * error message
   */
  errorMessage: string;
}

export function InputField({
  label,
  typeofIcon,
  errorMessage,
  ...inputProps
}: InputFieldProps) {
  const getIcon = () => {
    switch (typeofIcon) {
      case "person":
        return (
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
          </svg>
        );
      case "dollar":
        return (
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M18 8.5V8.35417C18 6.50171 16.4983 5 14.6458 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H9.42708C7.53436 19 6 17.4656 6 15.5729V15.5M12 3V21"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={styles.numberInput} className={styles.numberInputLabel}>
        {label}
      </label>
      <div
        className={`${styles.inputSubContainer} ${
          errorMessage ? styles.error : ""
        }`}
      >
        {getIcon()}
        <input type="number" className={styles.numberInput} {...inputProps} />
      </div>
      <p className={styles.errorMessage}>{errorMessage ? errorMessage : ""}</p>
    </div>
  );
}

export default InputField;
