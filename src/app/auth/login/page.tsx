"use client";

import React from "react";

export default function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.username.value, "Form submitted");
    console.log(e.currentTarget.email.value, "Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="w-full border border-gray-200 rounded-md h-10 mb-5 px-2"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="w-full border border-gray-200 rounded-md h-10 mb-5 px-2"
      />
      <button className="h-10 px-10 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  );
}
