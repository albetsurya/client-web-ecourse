import CardMentor from "@/components/ui/CardMentor";
import DetailProduct from "@/components/ui/DetailProduct";
import Facilities from "@/components/ui/Facilities";
import Material from "@/components/ui/Material";
import React from "react";

const DetailView = () => {
  return (
    <div>
      <div className="bg-[#F9FAFB]">
        <DetailProduct />
      </div>
      <div className="py-24">
        <CardMentor />
      </div>
      <div className="py-24">
        <Facilities />
      </div>
      <div className="py-24">
        <Material />
      </div>
    </div>
  );
};

export default DetailView;
