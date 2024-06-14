import SearchInput from "@/components/ui/SearchInput";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center">
        <span className="px-3 py-1 rounded-2xl text-[14px] text-[#6941C6] bg-[#F9F5FF]">
          Intensive Bootcamp
        </span>
        <h1 className="text-5xl text-[#42307D] font-semibold pt-4 pb-6">
          Upskill Your Talent!
        </h1>
        <h3 className="text-xl text-[#6941C6] font-normal">
          Kembangkan potensimu bersama Edspert
        </h3>
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
