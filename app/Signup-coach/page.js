import Link from 'next/link';

export default function CoachSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-sky-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Playure</h1>
        <p className="text-gray-600 mb-6">Create your coach account</p>

        <form className="space-y-4 text-left">
          <div>
            <label className="text-sm text-gray-500">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-blue-800"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-blue-800"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Create Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className=" w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-blue-800"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-blue-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded transition active:scale-95"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <div className="h-px bg-gray-300 w-full"></div>
          <span className="px-2 text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>

        <button
          className="w-full py-2 border border-gray-300 text-gray-400 rounded flex items-center justify-center cursor-not-allowed"
          disabled
        >
          <span className="text-xl mr-2">G</span>
          Login with Google
        </button>

        <div className="mt-6">
          <Link href="./SignupPage" className="text-blue-500 text-sm hover:underline">
            ← Back to role selection
          </Link>
        </div>
      </div>
    </div>
  );
}
