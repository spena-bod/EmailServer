import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <div className="bg-amarilloPastel h-full flex items-center ">
      <div className="p-4 bg-azulLaTiffany rounded-xl mx-auto shadow-md w-2/5">
        <div className="flex">
          <p className="text-white mx-auto text-4xl">Log In</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="items-center flex">
            <FontAwesomeIcon
              icon="envelope-open-text"
              className="h-24 self-center mx-auto"
              size="10x"
              color="#FFF"
            />
          </div>
          <div>
            <div className="mt-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              ></input>
            </div>
            <div className="mt-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              ></input>
            </div>
            <div>
              <Link
                class="mt-3 font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/signin"
              >
                No tenés account?
              </Link>
            </div>
            <button class="bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 w-full rounded">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
