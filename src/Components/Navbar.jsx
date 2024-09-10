import React from "react";

function Navbar({ darkMode }) {

  return (
    <nav
      className={`${
        darkMode ? "bg-slate-950 shadow-md" : "bg-zinc-100"
      } px-4 py-2`}
    >
      <div
        className={`flex items-center justify-between px-8 py-4 ${
          darkMode ? "bg-slate-700 text-white shadow-slate-300" : "bg-white text-black shadow-gray-100"
        } shadow-lg rounded-lg`}
      >
        <a href="/" className="flex items-center text-2xl font-bold">
          <img
            src="/sun-1.svg"
            alt="Short URL Logo"
            className="h-8 w-8 mr-2 sun-logo"
          />
          Short URL
        </a>
        <a href="/admin">
          <button
            className={`px-4 py-2 rounded-full ${
              darkMode
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "bg-gradient-to-r from-gray-200 to-gray-400 text-black shadow-sm"
            }`}
            style={{
              transition: "transform 0.3s ease",
              position: "relative",
              overflow: "hidden",
              fontFamily: "Poppins, sans-serif",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            super GOD mode
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
