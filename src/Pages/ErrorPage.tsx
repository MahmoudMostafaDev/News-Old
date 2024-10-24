import React from "react";

const ErrorPage: React.FC<{ isNotFound: boolean }> = (isNotFound) => {
  return (
    <div className="bg-slate-200 p-10 flex flex-col justify-center items-center gap-10 rounded-3xl">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-4xl text-red-700 mb-3">OOOPPSS....</h2>
        <h4 className="font-semibold">{isNotFound ? "Looks Like That Page DOESN'T EXIST" : "Looks Like We got error here"}</h4>
      </div>
      <p className="text-xl">Try to go to main page or refresh... sorry...</p>
    </div>
  );
};

export default ErrorPage;
