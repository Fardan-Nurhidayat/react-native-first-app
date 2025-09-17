import React from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
};
export default function Button({ type, onClick, children }: ButtonProps) {
  const backgroundColor = type === "primary" ? "#007bff" : "#6c757d";
  const textColor = "#ffffff";
  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        padding: "10px 20px",
        cursor: "pointer",
        border: "none",
        borderRadius: 5,
        fontSize: 16,
      }}
      onClick={onClick}>
      {children}
    </button>
  );
}
