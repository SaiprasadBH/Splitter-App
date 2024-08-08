import { useEffect, useState } from "react";
import "./WindowSizeDisplay.module.css";

export const WindowDisplay = () => {
  const [screenResolution, setScreenResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setScreenResolution({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    console.log("Resized");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <span>
        {screenResolution.height}
        {" px "}
      </span>
      <span>{" X "}</span>
      <span>
        {screenResolution.width} {" px "}
      </span>
    </>
  );
};
