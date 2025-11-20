"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 rounded text-white ${
        pending ? "bg-gray-400" : "bg-blue-600"
      }`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
