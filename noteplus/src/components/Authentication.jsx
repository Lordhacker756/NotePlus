import React from "react";

const Authentication = () => {
  return (
    <div
      className="main h-[90vh] flex items-center justify-center"
      style={{
        backgroundColor: "#923cb5",
        backgroundImage: "linear-gradient(147deg, #923cb5 0%, #000000 74%)",
      }}
    >
      <div
        className="card shadow-lg  rounded-lg p-5 login h-[50vh] w-[30vw] flex flex-col items-center justify-center"
        style={{
          background: "rgba( 255, 255, 255, 0.35 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 10px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <h1 className="text-2xl font-bold text-white mb-8 ">Login</h1>
        <form action="" method="post">
          <input
            className=" my-2 rounded-2xl px-3 py-1 w-full"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className=" my-2 rounded-2xl px-3 py-1 w-full"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button
            className="text-white w-full bg-purple-500 my-2 py-1 rounded-2xl"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Log In &#x1f512;
          </button>
        </form>
        <p className="text-white mt-4 text-xs ml-auto">Register &rarr;</p>
      </div>
    </div>
  );
};

export default Authentication;
