import React from "react";
interface Props {
  headline: string;
  desc: string;
}
const CardInfo: React.FC<Props> = ({ headline, desc }) => {
  function formatHeadline(text: string) {
    return text.substring(0, 60) + `${text.length > 60 ? '...' : ''}`;
  }
  function formatDesc(text: string) {
    return text.substring(0, 180) + `${text.length > 180 ? '...' : ''}`;
  }
  return (
    <>
      <div className="absolute top-36 bg-white border border-gray-950 w-[250px] left-1/2 h-20 -translate-x-1/2 flex items-center justify-center">
        <p className="text-md font-bold text-center px-2 text-primary break-words w-full  ">
          {formatHeadline(headline)}
        </p>
      </div>
      <p className="mt-16 px-4 font-bold text-center ">
        {formatDesc(desc)}
      </p>
    </>
  );
};

export default CardInfo;
