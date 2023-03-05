import React from "react";

export default function TestimonyBox({ text, name, role }) {
  return (
    <div className="bg-[#04142A] rounded-lg border border-white p-6 flex flex-col">
      <div className="text-white pb-2">
        <p className="text-white text-3xl pb-4">{name}</p>
        <p className="text-sm text-light-gray">{role}</p>
      </div>
      <div className="relative">
        <p className="tracking-tight text-white text-lg font-medium">&ldquo;{text}&rdquo;</p>
      </div>
    </div>
  );
}
