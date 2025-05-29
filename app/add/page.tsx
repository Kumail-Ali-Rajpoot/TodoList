import React from 'react'

function page() {
  return (
  <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
  <h2 className="text-2xl font-semibold text-center text-gray-800">Add TodoList</h2>

  <div>
    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
      Title
    </label>
    <input
      type="text"
      id="title"
      name="title"
      className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      placeholder="Enter title"
/>
  </div>

  <div>
    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
      Description
    </label>
    <textarea
      id="description"
      name="description"
      rows='10'
      className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      placeholder="Enter description"
    />
  </div>

  <button
    type="button"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200"
  >
    Submit
  </button>
</div>

  )
}

export default page