"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import photoProduct from "@/assets/images/photo-product.jpeg";
import checkIcon from "@/assets/icons/Check-icon.svg";
import { findAllProduct } from "@/modules/fetch/fetchProduct";

const CardProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const listProducts = await findAllProduct();
        setProducts(listProducts);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };

    fetchProduct();
  }, []);
  const handleButtonClick = () => {
    router.push("/detail");
  };
  console.log(products);
  return (
    <>
      {products?.length > 0 &&
        products.map((product) => (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-[16px] shadow">
            <Image
              src={photoProduct}
              className="w-[384px] h-[187px] object-cover rounded-t-[16px]"
              alt="Product Image"
            />

            <div key={product.id} className="px-8 pb-8">
              <div className="flex flex-col gap-1 py-4">
                <h5 className="text-xl font-semibold text-black">
                  {product.name}
                </h5>
                <p className="text-base text-gray-400">Batch 12</p>
              </div>

              <ul role="list" className="space-y-4 py-6">
                <li className="flex items-center">
                  <Image src={checkIcon} alt="Check Icon" />
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Certified Mentor
                  </span>
                </li>
                <li className="flex items-center">
                  <Image src={checkIcon} alt="Check Icon" />
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Integrated Module
                  </span>
                </li>
                <li className="flex items-center">
                  <Image src={checkIcon} alt="Check Icon" />
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Online Class
                  </span>
                </li>
                <li className="flex items-center">
                  <Image
                    src={checkIcon}
                    className="w-[24px] h-[24px]"
                    alt="Check Icon"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Active Community
                  </span>
                </li>
              </ul>
              <div className="flex flex-row justify-between items-center py-3">
                <span className="text-base line-through text-gray-400">
                  Rp. 1.499.000
                </span>
                <h2 className="text-xl font-bold">Rp. {product.price}</h2>
              </div>
              <button
                type="button"
                className="text-white hover:text-gray-200 bg-[#7F56D9] hover:bg-[#543990] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                onClick={handleButtonClick}
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardProduct;
