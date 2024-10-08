import React from "react";
import "../../global.css";
import "../../variables.css";

export interface InputFieldProps extends React.ComponentProps<"input"> {
  label: string;
  typeofIcon: "person" | "dollar";
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
          <div className="bg-[#f3f8fb] px-5 py-2.5 phone:px-2.5">
            <svg
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9965 12.9391C14.0074 12.9391 14.9768 12.4939 15.6916 11.7013C16.4064 10.9088 16.8079 9.83387 16.8079 8.71304C16.8079 7.59221 16.4064 6.51729 15.6916 5.72475C14.9768 4.9322 14.0074 4.48695 12.9965 4.48695C11.9857 4.48695 11.0162 4.9322 10.3015 5.72475C9.58669 6.51729 9.18514 7.59221 9.18514 8.71304C9.18514 9.83387 9.58669 10.9088 10.3015 11.7013C11.0162 12.4939 11.9857 12.9391 12.9965 12.9391ZM4.10327 25.6174C4.10327 24.3224 4.3333 23.0402 4.78023 21.8438C5.22716 20.6474 5.88223 19.5604 6.70805 18.6447C7.53386 17.729 8.51425 17.0027 9.59323 16.5071C10.6722 16.0116 11.8287 15.7565 12.9965 15.7565C14.1644 15.7565 15.3209 16.0116 16.3998 16.5071C17.4788 17.0027 18.4592 17.729 19.285 18.6447C20.1108 19.5604 20.7659 20.6474 21.2128 21.8438C21.6598 23.0402 21.8898 24.3224 21.8898 25.6174H4.10327Z"
                fill="#9FB3B2"
              />
            </svg>
          </div>
        );
      case "dollar":
        return (
          <div className="bg-[#f3f8fb] px-5 py-2.5 phone:px-2.5">
            <svg
              width="14"
              height="21"
              viewBox="0 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.27357 2.10925C9.02024 2.23724 9.69224 2.46125 10.2896 2.78125C10.9082 3.07991 11.4309 3.45325 11.8576 3.90125C12.2842 4.34925 12.6149 4.85058 12.8496 5.40525C13.0842 5.93858 13.2016 6.50391 13.2016 7.10125V7.67725H10.7696V7.29325C10.7696 6.58925 10.5349 5.99191 10.0656 5.50125C9.61757 5.01058 9.02024 4.66925 8.27357 4.47725V9.05325C10.0442 9.26658 11.3882 9.75725 12.3056 10.5252C13.2442 11.2719 13.7136 12.3066 13.7136 13.6292V13.8212C13.7136 15.2506 13.2122 16.4026 12.2096 17.2772C11.2282 18.1306 9.91624 18.6106 8.27357 18.7172V20.6692H5.96957V18.6532C5.03091 18.5039 4.22024 18.2479 3.53757 17.8852C2.87624 17.5012 2.32157 17.0532 1.87357 16.5412C1.4469 16.0079 1.1269 15.4426 0.913571 14.8452C0.700238 14.2266 0.593571 13.6079 0.593571 12.9892V12.2212H3.02557V12.6052C3.02557 13.6292 3.28157 14.4506 3.79357 15.0692C4.30557 15.6879 5.03091 16.1039 5.96957 16.3172V11.1012C4.36957 10.8879 3.1429 10.4292 2.28957 9.72525C1.45757 8.99991 1.04157 7.99725 1.04157 6.71725V6.52525C1.04157 5.84258 1.16957 5.24525 1.42557 4.73325C1.7029 4.19991 2.06557 3.75191 2.51357 3.38925C2.96157 3.00525 3.48424 2.70658 4.08157 2.49325C4.6789 2.25858 5.30824 2.10925 5.96957 2.04525V0.061245H8.27357V2.10925ZM11.2176 13.8212C11.2176 13.0746 10.9829 12.5199 10.5136 12.1572C10.0442 11.7946 9.29757 11.5279 8.27357 11.3572V16.4132C9.1909 16.3066 9.90557 16.0292 10.4176 15.5812C10.9509 15.1332 11.2176 14.5466 11.2176 13.8212ZM3.53757 6.52525C3.53757 7.12258 3.70824 7.61325 4.04957 7.99725C4.41224 8.35991 5.05224 8.62658 5.96957 8.79725V4.34925C5.2869 4.45591 4.7109 4.69058 4.24157 5.05325C3.77224 5.41591 3.53757 5.90658 3.53757 6.52525Z"
                fill="#9FB3B2"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col text-[#5d6b6c] w-full max-w-[32.75rem] p-[4px] phone:p-2">
      <label
        htmlFor="numberInput"
        className="font-bold mb-5 lg:text-[1.4rem] laptop:text-[1.4rem]"
      >
        {label}
      </label>

      <div
        className={`flex w-full items-center bg-[#f3f8fb] border-2 rounded-sm ${
          errorMessage
            ? "border-[#c59380]"
            : "border-transparent focus-within:border-[#65afa5]"
        }`}
      >
        {getIcon()}
        <input
          type="number"
          className="text-right bg-[#f3f8fb] border-none outline-none font-bold leading-6 px-5 py-2.5 w-full lg:text-[1.8rem] laptop:text-[1.8rem] tablet:text-[1.8rem] phone:text-[1.2rem]"
          {...inputProps}
        />
      </div>
      <p className="min-h-[1.5rem] text-[0.7rem] lg:text-[1rem] laptop:text-[1rem] tablet:text-[1rem] text-[#c59380] text-right mt-1.0 leading-6">
        {errorMessage || ""}
      </p>
    </div>
  );
}

export default InputField;
