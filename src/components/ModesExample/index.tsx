import React from "react";

import { SnackbarsProvider } from "easy-snackbars";

import ModesExampleButtons from "./ModesExampleButtons";
import { SnackbarsProviderProps } from "easy-snackbars/lib/typescript/src/SnackbarContext/SnackbarContext.types";

export default function ModesExample() {
  const [vertical, setVertical] =
    React.useState<SnackbarsProviderProps["position"]["vertical"]>("bottom");
  const [horizontal, setHorizontal] =
    React.useState<SnackbarsProviderProps["position"]["horizontal"]>("left");
  const [timeout, setTimeout] = React.useState<number>(3000);

  const handleVerticalToggle = () => {
    setVertical((prevVertical) =>
      prevVertical === "bottom" ? "top" : "bottom"
    );
  };
  const handleHorizontalToggle = () => {
    setHorizontal((prevHorizontal) =>
      prevHorizontal === "left" ? "right" : "left"
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
      <div
        style={{
          height: "500px",
          border: "1px solid red",
          position: "relative",
        }}
      >
        <SnackbarsProvider
          position={{ vertical: vertical, horizontal: horizontal }}
          exhibitionOptions={{ timeout: timeout }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ opacity: 0.5 }}>
              The SnackbarsProvider is limited by this red div. Snacks will show
              up in it!
            </p>
            <div
              style={{
                width: "50%",
                height: "300px",
              }}
            >
              <ModesExampleButtons />
            </div>
          </div>
        </SnackbarsProvider>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleVerticalToggle}>
          Toggle Vertical: {vertical}
        </button>
        <button onClick={handleHorizontalToggle}>
          Toggle Horizontal: {horizontal}
        </button>
        <input
          type="number"
          value={timeout}
          onChange={(e) => {
            setTimeout(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
}
