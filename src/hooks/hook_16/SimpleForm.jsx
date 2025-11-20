"use client";
import React from "react";
import SubmitButton from "./SubmitButton";

export default function SimpleForm() {
  async function handleSubmit(formData) {
    // simulate slow server request
    await new Promise((res) => setTimeout(res, 1500));
    console.log("Form submitted:", formData.get("name"));
  }

  return (
    <form action={handleSubmit} className="p-6 bg-white rounded shadow w-80">
      <h2 className="text-lg font-semibold mb-4">React 19 Form</h2>

      <input
        name="name"
        required
        placeholder="Enter your name"
        className="w-full mb-4 p-2 border rounded"
      />

      <SubmitButton />
    </form>
  );
}
