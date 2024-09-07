"use client";
import Image from "next/image";
import {
  BLUR_DATA_URL_GRAY,
  localPeople,
  OpeningHoursEmpty,
  prevadzky,
} from "../lib/functionsClient";
import {
  AboutUsElements,
  ContactPage,
  Prevadzka,
  TeamMember,
} from "../lib/interface";
import SwiperContactPage from "./SwiperContactPage";
import { useEffect, useRef, useState } from "react";
import IconDoubleArrowLeft from "./Icons/IconDoubleArrowLeft";
import IconDoubleArrowRight from "./Icons/IconDoubleArrowRight";
import IconCloseButton from "./Icons/IconCloseButton";

interface Props {
  data: ContactPage | undefined;
  data2: AboutUsElements | undefined;
}

const ContactPagee = ({ data, data2 }: Props) => {
  const [people, setPeople] = useState<TeamMember[] | null>(null);
  const [showWindow, setShowWindow] = useState(false);
  const [choosenPrevadzka, setChoosenPrevadzka] = useState<Prevadzka>();

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

  const handleShowShop = (id: string, e: any) => {
    e.preventDefault();

    const item = prevadzky.find((item) => item.id === id);
    if (item) {
      setChoosenPrevadzka(item);
      setShowWindow(true);
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
                    blurDataURL={BLUR_DATA_URL_GRAY}
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
                    blurDataURL={BLUR_DATA_URL_GRAY}
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

        <div className="relative">
          <Image
            src="/showroom_new.svg"
            className="w-full h-full object-cover min-h-[200px] pt-8 pb-8 hidden md:block"
            alt="referencie"
            width={1000}
            height={1000}
            quality={100}
            priority
            useMap="#workmap"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_GRAY}
          />

          <div
            className="absolute  rounded-full cursor-pointer"
            style={{
              width: "5%",
              height: "7%",
              top: "62%",
              left: "21%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("1", e)}
          />
          <div
            className="absolute  rounded-full cursor-pointer"
            style={{
              width: "5%",
              height: "7%",
              top: "56%",
              left: "27%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("2", e)}
          />
          <div
            className="absolute  rounded-full cursor-pointer"
            style={{
              width: "5%",
              height: "7%",
              top: "60%",
              left: "32%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("4", e)}
          />
          <div
            className="absolute  rounded-full cursor-pointer"
            style={{
              width: "5%",
              height: "7%",
              top: "30%",
              left: "41%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("5", e)}
          />
          <div
            className="absolute  rounded-full cursor-pointer"
            style={{
              width: "5%",
              height: "7%",
              top: "50%",
              left: "44%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("6", e)}
          />
          <div
            className="absolute 0 rounded-full cursor-pointer"
            style={{
              width: "5%",
              height: "7%",
              top: "36%",
              left: "56%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("7", e)}
          />
          <div
            className="absolute  rounded-full cursor-pointer"
            style={{
              width: "5%",
              height: "7%",
              top: "47%",
              left: "68%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("8", e)}
          />
        </div>

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
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_GRAY}
            />
          </div>
          <div
            className="absolute   rounded-full cursor-pointer"
            style={{
              width: "6%",
              height: "8%",
              top: "65%",
              left: "58%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("1", e)}
          />
          <div
            className="absolute   rounded-full cursor-pointer"
            style={{
              width: "8%",
              height: "8%",
              top: "57%",
              left: "71%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("2", e)}
          />
          <div
            className="absolute  rounded-full cursor-pointer"
            style={{
              width: "10%",
              height: "8%",
              top: "59%",
              left: "86%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("4", e)}
          />
          <div
            className="absolute rounded-full cursor-pointer"
            style={{
              width: "10%",
              height: "8%",
              top: "29%",
              left: "108%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("5", e)}
          />
          <div
            className="absolute   rounded-full cursor-pointer"
            style={{
              width: "15%",
              height: "8%",
              top: "49%",
              left: "118%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("6", e)}
          />
          <div
            className="absolute   rounded-full cursor-pointer"
            style={{
              width: "15%",
              height: "8%",
              top: "36%",
              left: "150%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("7", e)}
          />
          <div
            className="absolute   rounded-full cursor-pointer"
            style={{
              width: "15%",
              height: "8%",
              top: "47%",
              left: "180%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleShowShop("8", e)}
          />
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

      {showWindow && (
        <>
          {" "}
          <div className="behind_card_background"></div>
          <div className="popup_message  max-h-[90vh]  overflow-y-auto md:max-h-fit justify-center">
            <div className="" onClick={() => setShowWindow(false)}>
              <IconCloseButton />
            </div>{" "}
            <h5 className="text-center underline">{choosenPrevadzka?.kraj}</h5>
            <h6 className="text-center max-w-[80%] pt-8">
              {" "}
              {choosenPrevadzka?.adresa}
            </h6>
            <p className="text-primary text-center pt-8">
              {data?.otvaracie_hodiny}:
            </p>
            <div className="flex flex-col showrooms">
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{data?.hodiny.pon}</p>
                <p>{choosenPrevadzka?.hodiny.pon}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{data?.hodiny.ut}</p>
                <p>{choosenPrevadzka?.hodiny.ut}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{data?.hodiny.st}</p>
                <p>{choosenPrevadzka?.hodiny.st}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{data?.hodiny.stv}</p>
                <p>{choosenPrevadzka?.hodiny.stv}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{data?.hodiny.pi}</p>
                <p>{choosenPrevadzka?.hodiny.pi}</p>
              </div>
              <div className="flex flex-row gap-8 justify-between">
                <p className="font-bold">{data?.hodiny.sob}</p>
                <p>{choosenPrevadzka?.hodiny.sob}</p>
              </div>
              {choosenPrevadzka?.hodiny.ne === "-" ? (
                <div className="flex flex-row gap-8 justify-between">
                  <p className="font-bold">{data?.hodiny.ne}</p>
                  <div className="flex justify-center w-full items-center">
                    {" "}
                    <p className="text-center">{choosenPrevadzka?.hodiny.ne}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row gap-8 justify-between">
                  <p className="font-bold">Nedeľa</p>
                  <p>{choosenPrevadzka?.hodiny.ne}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactPagee;
