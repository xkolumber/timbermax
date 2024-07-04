import React from "react";
import Image from "next/image";
import IconCalculatePriceOffer from "../icons/IconCalculatePriceOffer";

const HomePagePriceOffer = () => {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src="/cenova_ponuka.jpg"
        alt="Obrazok"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <IconCalculatePriceOffer />
      <button className="btn btn--secondary absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        Výpočet ceny ihneď
      </button>

      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      <div className="absolute inset-0 flex flex-col justify-center  text-white z-10 p-4  md:pl-40 max-w-[630px]">
        <h5 className="text-2xl font-bold mb-4">Cenová ponuka</h5>
        <p className="mb-4">
          Vypracovali sme pre Vás jednoduchý naceňovací systém fungujúci na
          princípe konfigurátora automobilov. Naceňovač Vám vie vypočítať
          celkovú hodnotu diela na kľúč s rozdelením sumy na materiál, montáž a
          vedľajšie rozpočtové náklady.
        </p>
        <p>
          Pri procese nacenenia terasy či fasády Vás sprevádzajú vysvetlenia
          jednotlivých krokov procesu montáže spolu s grafickými vizualizáciami
          pre čo možno najlepšiu predstavu finálneho diela. Naceňovač ponúka
          možnosť nákupu samostatného materiálu aj formou e-shopu pre klientov
          či firmy, ktorí majú záujem o presný počet kusov jednotlivých položiek
          z našej ponuky.
        </p>
      </div>
    </div>
  );
};

export default HomePagePriceOffer;
