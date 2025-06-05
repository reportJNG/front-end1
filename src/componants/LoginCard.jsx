import React from 'react'

function LoginCard() {
  return (
     <div className="absolute top-20 right-4 w-80 bg-white p-6 rounded shadow-lg z-10">
          <h2 className="text-lg font-semibold mb-4">Log In</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className="mt-2 text-sm text-gray-500 hover:underline block mx-auto"
          >
            Cancel
          </button>
        </div>
  )
}

export default LoginCard