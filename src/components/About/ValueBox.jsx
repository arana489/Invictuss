import React from "react";

export default function ValueBox({name, title, description }) {
  return (
    <div>
    <h3 className="text-m text-white font-medium mb-2 text-center">{name}</h3>
    <div className="h-72 mb-14 rounded-2xl border border-white p-6 flex flex-col items-center m-auto" style={{ width: "200%", maxWidth: "300px" }}></div>
    <p className="text-white text-center text-sm">{title}</p>
    <p className="text-white text-center text-sm">{description}</p>
    </div>
  );
}