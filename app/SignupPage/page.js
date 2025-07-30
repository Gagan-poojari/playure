import Link from 'next/link';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-sky-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Playure</h1>
        <p className="text-gray-600 mb-6">Choose your signup type</p>

        <div className="space-y-4">
          <Link href="./Signup-coach"> <button className="w-full py-2  mb-4 border border-blue-200 text-gray-500 rounded-lg hover:bg-blue-50 transition active:scale-95 cursor-pointer ">
            Signup as Coach
          </button></Link>
          <button className="w-full py-2 border border-blue-200 text-gray-500 rounded-lg hover:bg-blue-50 transition active:scale-95 cursor-pointer">
            Signup as Player
          </button>
          <button className="w-full py-2 border border-blue-200 text-gray-500 rounded-lg hover:bg-blue-50 transition active:scale-95 cursor-pointer">
            Signup as Business
          </button>
        </div>
      </div>
    </div>
  );
}