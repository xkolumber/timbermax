import { addLanguage } from "../lib/actions";

export default function CreateForm() {
  return (
    <form action={addLanguage}>
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
          />
        </div>
      </div>
      <button type="submit" className="btn btn--primary">
        Add
      </button>
    </form>
  );
}
