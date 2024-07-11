"use client";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { addLanguage } from "../lib/actions";

export default function CreateForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      await addLanguage(formData);

      console.log(event.currentTarget);

      event.currentTarget.reset();
      setLoading(false);
    } catch (error) {
      console.error("Error adding language:", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="jazyk" className="mb-2 block text-sm font-medium">
            Add language
          </label>
          <input
            id="jazyk"
            name="jazyk"
            type="text"
            className="w-full p-2 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className={`btn btn--primary ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
        disabled={loading}
      >
        {loading ? (
          <ClipLoader size={24} color={"#ffffff"} loading={true} />
        ) : (
          "Add"
        )}
      </button>
    </form>
  );
}
