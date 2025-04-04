import React from "react";
import Image from "next/image";
import { BLUR_DATA_URL_GRAY } from "../lib/functionsClient";

const page = () => {
  return (
    <main>
      <div className="bg-secondary">
        <div className="main_section additional_padding">
          <h4 className="text-tertiary custom-underline">Blog</h4>
          <p className="text-tertiary">Vitajte na blogu Timbermax!</p>
          <p className="pt-8 text-tertiary">
            Na našom blogu nájdete už čoskoro množstvo užitočných informácií,
            tipov a inšpirácie zo sveta kvalitných kompozitných terás a fasád.
            Timbermax prináša riešenia, ktoré spájajú estetiku, trvanlivosť a
            bezúdržbovosť. Náš blog bude miestom kde vám ukážeme ako naše
            prvotriedne profily správne využiť.
          </p>
        </div>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={1080}
          width={1920}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL_GRAY}
        />

        <div className="main_section">
          <p className="pt-8 text-tertiary">Čo vás čaká?</p>
          <ul className="4">
            <li>Praktické rady a návody na montáž a údržbu terás Timbermax</li>
            <li>nšpiratívne nápady na dizajn vonkajších priestorov.</li>
            <li>
              {" "}
              Novinky a trendy v oblasti záhradnej architektúry a exteriérového
              dizajnu
            </li>
            <li>
              {" "}
              Skúsenosti zákazníkov a reálne projekty, ktoré vás presvedčia o
              kvalite Timbermax
            </li>
          </ul>
          <p className="pt-8 text-tertiary">
            Prvé články pripravujeme už teraz! Sledujte náš blog, aby ste
            neprišli o jedinečné rady a inšpirácie.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
