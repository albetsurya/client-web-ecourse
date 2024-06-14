import React from "react";
import icon1 from "@/assets/icons/facilities/Icon1.svg";
import icon2 from "@/assets/icons/facilities/Icon2.svg";
import icon3 from "@/assets/icons/facilities/Icon3.svg";
import icon4 from "@/assets/icons/facilities/Icon4.svg";
import icon5 from "@/assets/icons/facilities/Icon5.svg";
import icon6 from "@/assets/icons/facilities/Icon6.svg";

const Facilities = () => {
  const facilityDetail = [
    {
      icon: icon1,
      facility: "Komunitas",
      description:
        "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
    },
    {
      icon: icon2,
      facility: "1-on-1 Session",
      description:
        "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
    },
    {
      icon: icon3,
      facility: "Active Learning",
      description:
        "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
    },
    {
      icon: icon4,
      facility: "Happy Atmosphere",
      description:
        "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
    },
    {
      icon: icon5,
      facility: "Tugas",
      description:
        "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
    },
    {
      icon: icon6,
      facility: "Intensive Bootcamp",
      description:
        "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 w-screen">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-semibold">Fasilitas</h1>
        <p className="text-xl font-normal text-gray-500">
          Pengalaman Bootcamp Terbaik untuk Kamu!
        </p>
      </div>
      <div className="grid grid-cols-3 px-20 gap-16 w-full">
        {facilityDetail.map((facility, index) => (
          <div
            key={index}
            className="w-[384px] h-[154px] mx-8 bg-white "
          >
            <div className="flex flex-col items-center pb-10">
              <div className="flex items-center justify-center mb-5 w-12 h-12 bg-[#F4EBFF] rounded-full">
                <img
                  className="w-6 h-6 "
                  src={facility.icon.src}
                  alt={`${facility.facility} image`}
                />
              </div>
              <div className="mb-2">
                <h5 className="text-center text-lg font-semibold text-gray-900 ">
                  {facility.facility}
                </h5>
              </div>
              <p className="text-center text-gray-500 font-normal text-base">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
