import Image from "next/image";
import React from "react";
import detailProduct from "@/assets/images/detail-product.png";

const DetailProduct = () => {
  return (
    <div className="w-full flex flex-row gap-24 px-28 py-24 ">
      <div>
        <Image src={detailProduct} />
      </div>
      <div className="flex flex-col gap-16 py-[34px] w-[560px] h-[492px]">
        <div className="flex flex-col gap-3">
          <p className="text-[#6941C6] text-base font-semibold">
            Intensive Bootcamp
          </p>
          <h3 className="text-5xl font-semibold">Web Development Bootcamp</h3>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-3 w-[264px] h-28">
              <h2 className="text-6xl font-semibold text-[#7F56D9]">400+</h2>
              <p className="text-gray-900 text-lg font-medium">
                Portfolio Siswa
              </p>
            </div>
            <div className="flex flex-col gap-3 w-[264px] h-28">
              <h2 className="text-6xl font-semibold text-[#7F56D9]">80%</h2>
              <p className="text-gray-900 text-lg font-medium">
                Alumni diterima kerja
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-3 w-[264px] h-28">
              <h2 className="text-6xl font-semibold text-[#7F56D9]">10k</h2>
              <p className="text-gray-900 text-lg font-medium">
                Anggota Komunitas
              </p>
            </div>
            <div className="flex flex-col gap-3 w-[264px] h-28">
              <h2 className="text-6xl font-semibold text-[#7F56D9]">2000+</h2>
              <p className="text-gray-900 text-lg font-medium">Testimoni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
