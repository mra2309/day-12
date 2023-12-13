import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="py-4 text-white bg-blue-600">
        <div className="w-2/3 m-auto">
          <div className="flex justify-between">
            <div>
              <Link to="/" className="font-semibold">
                Web Siwa Keren
              </Link>
            </div>
            <div className="flex gap-4">
              <NavLink
                to="/siswa"
                className={({ isActive, isPending }) => {
                  isPending ? "pending" : isActive ? "text-red-500" : "";
                }}
              >
                Siswa
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) => {
                  isPending ? "pending" : isActive ? "text-red-500" : "";
                }}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
