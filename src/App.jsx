import DynamicInput2 from "./components/DynamicInput"

function App() {
  return (
    <div className="max-w-2xl my-5 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Dynamic Input Component
      </h1>
      <DynamicInput2 />
      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        How to use
      </h2>
      <ul className="list-disc list-inside text-gray-600">
        <li className="mb-2">
          <i>
            Press enter to save the input text or choose a tag from the list
          </i>
        </li>
        <li>
          <i>Press backspace to delete the entered tag or text input</i>
        </li>
      </ul>
    </div>
  )
}

export default App
