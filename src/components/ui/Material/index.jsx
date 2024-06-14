import React from "react";

const Material = () => {
  const materialPrograms = [
    {
      title: "Introduction to Web Development",
      description:
        "Belajar logika dan hal hal dasar untuk menyipkan kamu belajar pengembangan web",
    },
    {
      title: "Introduction to Web Development",
      description:
        "Belajar logika dan hal hal dasar untuk menyipkan kamu belajar pengembangan web",
    },
    {
      title: "Introduction to Web Development",
      description:
        "Belajar logika dan hal hal dasar untuk menyipkan kamu belajar pengembangan web",
    },
    {
      title: "Introduction to Web Development",
      description:
        "Belajar logika dan hal hal dasar untuk menyipkan kamu belajar pengembangan web",
    },
  ];
  return (
    <div className="flex flex-col px-[336px] gap-8">
      <h1 className="text-xl font-semibold text-gray-900">Materi</h1>
      {materialPrograms.map((material, index) => (
        <div key={index}>
          <div className="border border-[#EAECF0] rounded-2xl py-6 pl-6 pr-7 w-[768px] h-[112px]">
            <h3 className="text-lg font-medium text-gray-900">
              {material.title}
            </h3>
            <p className="text-base font-normal text-gray-500">
              {material.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Material;
