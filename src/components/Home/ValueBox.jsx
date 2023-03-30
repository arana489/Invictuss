import React from "react";

export default function ValueBox({ imageSrc, title, description }) {
  return (
    <div className="h-72 mb-14 rounded-lg border border-white p-6 flex flex-col items-center m-auto" style={{ width: "100%", maxWidth: "301px" }}>
      <img className="h-16 w-16 mb-4" src={imageSrc} alt={title} />
      <h3 className="text-m text-white font-medium mb-2 text-center">{title}</h3>
      <p className="text-white text-center text-sm">{description}</p>
    </div>
  );
}