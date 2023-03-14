import React from "react";

export default function TestimonyBox({ text, name, role }) {
  return (
    <div className="rounded-lg border border-white p-6  flex-col w-[500px]">
      <div className="text-white pb-2">
        <p className="text-white text-m pb-4">{name}</p>
        <p className="text-m text-light-gray">{role}</p>
      </div>
      <div className="relative">
        <p className="tracking-tight text-white text-sm font-medium">&ldquo;{text}&rdquo;</p>
      </div>
    </div>
  );
}