import React from "react";
import Image from "next/image";
import agnesPhoto from "@/assets/images/mentor/agnes.png";
import kajenPhoto from "@/assets/images/mentor/kajen.png";
import natsirPhoto from "@/assets/images/mentor/natsir.png";
import rahimahPhoto from "@/assets/images/mentor/rahimah.png";
import suartiniPhoto from "@/assets/images/mentor/suartini.png";
import hannahPhoto from "@/assets/images/mentor/hannah.png";
import firmanPhoto from "@/assets/images/mentor/firman.png";
import marioPhoto from "@/assets/images/mentor/mario.png";

const CardMentor = () => {
  const mentorDetail = [
    {
      name: "Agnes Amanta",
      position: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: agnesPhoto,
      color: "bg-[#C7B9DA]",
    },
    {
      name: "Kajen Permadi",
      position: "Engineering Manager",
      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      image: kajenPhoto,
      color: "bg-[#AA9C75]",
    },
    {
      name: "Natsir Naradi",
      position: "Product Manager",
      description: "Former PM for Linear, Lambda School, and On Deck.",
      image: natsirPhoto,
      color: "bg-[#D4B5AD]",
    },
    {
      name: "Rahimah Gilda",
      position: "Frontend Developer",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: rahimahPhoto,
      color: "bg-[#BEA887]",
    },
    {
      name: "Suartini Novi",
      position: "Backend Developer",
      description: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
      image: suartiniPhoto,
      color: "bg-[#A2A8CD]",
    },
    {
      name: "Hannah Airlangga",
      position: "Product Designer",
      description:
        "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
      image: hannahPhoto,
      color: "bg-[#D1BAA9]",
    },
    {
      name: "Firman Kurniawan",
      position: "UX Researcher",
      description:
        "Lead user research for Slack. Contractor for Netflix and Udacity.",
      image: firmanPhoto,
      color: "bg-[#D1DFC3]",
    },
    {
      name: "Mario Agustinus",
      position: "Customer Success",
      description: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
      image: marioPhoto,
      color: "bg-[#CFC3A7]",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-center text-4xl font-semibold">Mentor</h1>
        <p className="text-center text-xl font-normal text-gray-500">
          Dipandu oleh Mentor Terbaik Kami
        </p>
      </div>
      <div className="grid grid-cols-4 px-20 gap-16">
        {mentorDetail.map((mentor, index) => (
          <div
            key={index}
            className="w-[280px] h-[316px] max-w-sm mx-8 p-6 bg-[#F9FAFB]"
          >
            <div className="flex flex-col items-center pb-10">
              <div className="mb-5">
                <Image
                  className={`w-24 h-24 rounded-full shadow-lg ${mentor.color}`}
                  src={mentor.image}
                  alt={`${mentor.name} image`}
                  width={96}
                  height={96}
                />
              </div>
              <div className="mb-2">
                <h5 className="text-center text-lg font-semibold text-gray-900">
                  {mentor.name}
                </h5>
                <span className="text-center text-base font-normal text-[#6941C6]">
                  {mentor.position}
                </span>
              </div>
              <p className="text-center text-gray-500 font-normal text-base">
                {mentor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMentor;
