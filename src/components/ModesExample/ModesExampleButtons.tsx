import React from "react";

import { useSnackbarsContext } from "easy-snackbars";

const buttons = [
  {
    type: "info",
    title: "info",
    message: "info message",
  },
  {
    type: "success",
    title: "success",
    message: "success message",
  },
  {
    type: "warning",
    title: "warning",
    message: "warning message",
  },
  {
    type: "error",
    title: "error",
    message: "error message",
  },
];

export default function ModesExampleButtons({ timeout = 3000 }) {
  const { displaySnack } = useSnackbarsContext();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "64px 32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {buttons.map((button) => (
        <button
          key={button.type}
          onClick={() =>
            displaySnack(
              { message: button.message, timeout: timeout },
              button.type
            )
          }
        >
          {button.title}
        </button>
      ))}
    </div>
  );
}
