"use client";
import Image from "next/image";
import { localPeople, OpeningHoursEmpty } from "../lib/functionsClient";
import { AboutUsElements, ContactPage, TeamMember } from "../lib/interface";
import SwiperContactPage from "./SwiperContactPage";
import { useEffect, useRef, useState } from "react";
import IconDoubleArrowLeft from "./Icons/IconDoubleArrowLeft";
import IconDoubleArrowRight from "./Icons/IconDoubleArrowRight";

interface Props {
  data: ContactPage | undefined;
  data2: AboutUsElements | undefined;
}

const ContactPagee = ({ data, data2 }: Props) => {
  const [people, setPeople] = useState<TeamMember[] | null>(null);

  useEffect(() => {
    const people_data = localPeople.map((localPerson, index) => ({
      ...localPerson,
      text: data2?.tim[index]?.popis || "",
      job: data2?.tim[index]?.funkcia || localPerson.job,
      meno: data2?.tim[index]?.meno || localPerson.meno,
      main_image: localPerson.main_image,
      image: localPerson.image,
    }));
    setPeople(people_data);
  }, [data2]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="main_section additional_padding">
        <h3 className="text-primary custom-underline">
          {data?.kontakt_nadpis}
        </h3>
        <div className="flex flex-col md:hidden gap-8 !-mt-4">
          {people &&
            people.map((item, index) => (
              <div className="w-full h-full rounded-[12px]" key={index}>
                <div className="relative">
                  <Image
                    src={`${localPeople[index].image}`}
                    alt="hlavna_fotka"
                    height={342}
                    width={342}
                    quality={100}
                    priority={true}
                    className="w-full  h-[342px]  object-cover rounded-[10px]"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AIOBfwUDAv/8+AAwMTFdXV3c29kA0tLSlJSR8O/rAK+vr4WFhcLBwIFsFZK4NPpmAAAAAElFTkSuQmCC"
                  />
                  <div className="absolute bottom-0  left-10  text-white pb-4  z-10">
                    <div className="flex flex-col">
                      <p className="font-medium">{item.meno}</p>{" "}
                      <p className="">{item.job}</p>
                      <p>{item.tel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="grid-cols-2 hidden md:grid lg:grid-cols-4 gap-6 mt-16">
          {people &&
            people.map((item, index) => (
              <div className="w-full h-full" key={index}>
                <div className="relative">
                  <Image
                    src={`${localPeople[index].image}`}
                    alt="hlavna_fotka"
                    height={342}
                    width={342}
                    quality={100}
                    priority={true}
                    className="w-full  h-[342px]  object-cover rounded-[8px]"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AIOBfwUDAv/8+AAwMTFdXV3c29kA0tLSlJSR8O/rAK+vr4WFhcLBwIFsFZK4NPpmAAAAAElFTkSuQmCC"
                  />
                  <div className="absolute bottom-0  left-10  text-white pb-4  z-10">
                    <div className="flex flex-col">
                      <p className="font-medium">{item.meno}</p>{" "}
                      <p className="">{item.job}</p>
                      <p>{item.tel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <h6 className="text-primary custom-underline mt-16">
          {data?.vzorkovne_nadpis}
        </h6>
        <p className="text-primary">{data?.vzorkovne_popis1}</p>

        <p className="text-primary pt-8 lg:max-w-[80%]">
          {data?.vzorkovne_popis2}
        </p>
        <p className="text-primary pt-8 lg:max-w-[80%]">
          {data?.vzorkovne_popis3}
        </p>
        <p className="text-primary pt-8">{data?.vzorkovne_popis4}</p>

        <Image
          src="/showroom_new.svg"
          className="w-full h-full object-cover min-h-[200px] pt-8 pb-8 hidden md:block"
          alt="referencie"
          width={1000}
          height={1000}
          quality={100}
          priority
        />

        <h3 className="custom-underline !mb-0 mt-16 hidden md:block">
          {data?.prevadzky_nadpis}
        </h3>
      </div>
      <div className="relative md:hidden">
        <div
          className="absolute left-[42%] bottom-0 transform -translate-x-1/2 z-10 pb-8"
          onClick={() => scroll("left")}
        >
          <IconDoubleArrowLeft />
        </div>
        <div
          className="absolute left-[58%] bottom-0 transform -translate-x-1/2 z-10 pb-8"
          onClick={() => scroll("right")}
        >
          <IconDoubleArrowRight />
        </div>

        <div
          className="relative overflow-x-auto w-full scroll"
          ref={scrollContainerRef}
        >
          <div className="flex w-[1000px] h-full">
            <Image
              src="/showroom_new.svg"
              className="object-contain"
              alt="referencie"
              width={1000}
              height={600}
              quality={100}
            />
          </div>
        </div>
      </div>
      <h3 className="custom-underline !mb-0 p-[2.5rem] md:hidden ">
        {data?.prevadzky_nadpis}
      </h3>

      <SwiperContactPage
        otvaracie_hodiny={data?.otvaracie_hodiny ? data.otvaracie_hodiny : ""}
        hodiny={data?.hodiny ? data.hodiny : OpeningHoursEmpty}
      />
      <div className="main_section">
        <h3 className="custom-underline">{data?.sidlo_nadpis}</h3>
        <p className="text-primary font-bold !-mt-8 md:mt-0">{data?.sidlo}</p>
        <p className="pt-4 text-primary mt-8">{data?.sidlo_popis1}</p>
        <p className="pt-4 text-primary">{data?.sidlo_popis2}</p>
        <p className="pt-4 text-primary">{data?.sidlo_popis3}</p>
      </div>
    </>
  );
};

export default ContactPagee;
