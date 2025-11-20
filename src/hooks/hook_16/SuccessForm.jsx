"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

export default function SuccessForm() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData) {
    await new Promise((res) => setTimeout(res, 1200)); 

    console.log("Form submitted:", formData.get("email"));
    setSuccess(true);
  }

  return (
    <div className="p-6 bg-white rounded shadow w-80">
      <h2 className="text-lg font-semibold mb-4">Success Message Form</h2>

      {success && (
        <p className="text-green-600 font-medium mb-3">
          Form submitted successfully!
        </p>
      )}

      <form action={handleSubmit}>
        <input
          name="email"
          required
          placeholder="Enter email"
          className="w-full mb-4 p-2 border rounded"
        />

        <SubmitButton />
      </form>
    </div>
  );
}
