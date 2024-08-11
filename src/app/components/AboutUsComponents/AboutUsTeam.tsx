"use client";
import { Team, TeamMember } from "@/app/lib/interface";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconArrowLoopLeft from "../Icons/IconArrowLoopLeft";
import IconArrowLoopRight from "../Icons/IconArrowLoopRight";
import { localPeople } from "@/app/lib/functionsClient";

interface Props {
  tim: Team[];
  spoznajte_tim: string;
}

const AboutUsTeam = ({ tim, spoznajte_tim }: Props) => {
  const [selectedHuman, setSelectedHuman] = useState<TeamMember | null>(null);
  const [isHovered, setIsHovered] = useState<TeamMember | null>(null);
  const [people, setPeople] = useState<TeamMember[] | null>(null);

  useEffect(() => {
    const people_data = localPeople.map((localPerson, index) => ({
      ...localPerson,
      text: tim[index]?.popis || "",
      job: tim[index]?.funkcia || localPerson.job,
      meno: tim[index]?.meno || localPerson.meno,
      main_image: localPerson.main_image,
      image: localPerson.image,
    }));
    setPeople(people_data);
  }, [tim]);

  useEffect(() => {
    if (people && people.length > 0) {
      setSelectedHuman(people[0]);
    }
  }, [tim, people]);
  if (!selectedHuman) return null;

  console.log(people);

  return (
    <div className="bg-secondary">
      <h3 className="pt-16 xl:pt-48 text-center  custom-underline font-normal">
        {spoznajte_tim}
      </h3>

      <div className="relative h-[700px]   2xl:h-[850px] 3xl:x-[893px] hidden xl:grid">
        <Image
          src={`${selectedHuman.main_image}`}
          alt="hlavna_fotka"
          height={1080}
          width={1900}
          quality={100}
          priority={true}
          className="w-full h-full   object-cover absolute"
        />
        <div className="flex flex-row h-full">
          <div className="w-1/2"></div>
          <div className="w-1/2 z-10 relative flex flex-col justify-center">
            <div className="flex flex-row gap-4  items-center">
              {" "}
              <h5 className="text-[#1D281F]">{selectedHuman.meno} </h5>
              <p className="text-primary">
                | {""} {selectedHuman.job}
              </p>
            </div>
            <div className="h-[2px] w-full bg-primary mt-4 mb-16"></div>

            <p className="text-[#1D281F] md:max-w-[80%]">
              {selectedHuman.text}
            </p>
          </div>
        </div>
      </div>
      <div className="grid-cols-4 overflow-hidden  hidden xl:grid">
        {people &&
          people.map(
            (object, index) =>
              object.meno !== selectedHuman.meno && (
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovered(object)}
                  onMouseLeave={() => setIsHovered(null)}
                  key={index}
                >
                  <Image
                    src={`${object.image}`}
                    alt="hlavna_fotka"
                    height={600}
                    width={200}
                    quality={100}
                    priority={true}
                    className="w-full h-[600px] object-cover cursor-pointer hover:scale-[1.10] duration-300 z-10"
                    onClick={() => setSelectedHuman(object)}
                  />
                  {isHovered?.meno === object.meno && (
                    <div className="absolute bottom-0 left-0 pb-16 pl-8 z-50">
                      <p>{object.meno}</p>
                      <p>| {object.job}</p>
                    </div>
                  )}
                </div>
              )
          )}
      </div>
      <div className="xl:hidden navbar_section">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          freeMode={true}
          modules={[Navigation]}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          speed={1000}
        >
          {tim.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full rounded-[12px]">
                <div className="relative">
                  <Image
                    src={`${localPeople[index].image}`}
                    alt="hlavna_fotka"
                    height={342}
                    width={342}
                    quality={100}
                    priority={true}
                    className="w-full  h-[342px] rounded-t-[12px] object-cover"
                  />
                  <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2  text-white pb-4 w-full z-10">
                    <div className="flex flex-col items-center">
                      <p className="font-medium">{item.meno}</p>{" "}
                      <p className="text-center">{item.funkcia}</p>
                    </div>
                  </div>
                  <div className="arrow-right absolute bottom-0 left-0 scale-75 pb-8 pl-2 z-20 cursor-pointer">
                    <IconArrowLoopLeft />
                  </div>
                  <div className="arrow-left absolute bottom-0 right-0 scale-75 pb-8 pr-2  z-20 cursor-pointer">
                    <IconArrowLoopRight />
                  </div>
                </div>

                <div className="bg-[#C6BFB6] p-8 rounded-b-[12px]">
                  {item.popis}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUsTeam;
