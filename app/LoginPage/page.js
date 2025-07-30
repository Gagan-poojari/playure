import Head from "next/head";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl flex overflow-hidden">
          
          {/* Left Section */}
          <div className="w-1/2 p-10">
            <h2 className="text-2xl font-bold text-blue-500 mb-6">Playure</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Sign in to Account</h3>

            {/* Social Icons */}
            <div className="flex space-x-4 my-4">
              <button className="border p-2 rounded-full text-blue-500 cursor-pointer"><FaFacebookF/></button>
              <button className="border p-2 rounded-full text-blue-500 cursor-pointer"><FaLinkedinIn/></button>
              <button className="border p-2 rounded-full text-blue-500 cursor-pointer"><FaGoogle/></button>
            </div>

            <p className="text-sm text-blue-500 mb-4">or use your email account</p>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded text-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded text-blue-700"
            />

            <div className="flex justify-between items-center text-sm text-blue-500 mb-4">
              <label>
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

            <button className="w-full bg-white text-blue-600 border border-blue-500 py-2 rounded hover:bg-green-50 font-semibold hover:bg-blue-50 font-semibold cursor-pointer transition duration-150 active:scale-95">
              Sign In
            </button>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-blue-500 text-white flex flex-col items-center justify-center p-10">
            <h2 className="text-2xl font-bold mb-2">Hello, Friend!</h2>
            <p className="text-sm text-center mb-6">
              Fill up personal information and start journey with us.
            </p>
            <Link href='./SignupPage'><button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 hover:bg-blue-50 font-semibold cursor-pointer transition duration-150 active:scale-95">
              Sign Up
            </button> 
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
