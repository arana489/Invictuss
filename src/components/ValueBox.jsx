import React from "react";

export default function ValueBox({ imageSrc, title, description }) {
  return (
    <div className="bg-[#04142A] rounded-lg border border-white p-6 flex flex-col items-center" style={{ width: "100%", maxWidth: "301px" }}>
      <img className="h-16 w-16 mb-4" src={imageSrc} alt={title} />
      <h3 className="text-xl text-white font-medium mb-2 text-center text-sm">{title}</h3>
      <p className="text-white text-center text-sm">{description}</p>
    </div>
  );
}
