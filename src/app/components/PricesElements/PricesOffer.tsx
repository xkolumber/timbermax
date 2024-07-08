import React from "react";
import Image from "next/image";
import getBase64 from "@/app/lib/functions";
import IconCalculateGreen from "../Icons/IconCalculateGreen";

const three_text = [
  {
    title: "Realizácia diela na kľúč",
    description:
      "Pokiaľ máte záujem o bezstarostnú realizáciu diela so zárukou na montáž od skúsených stolárov zvolte túto možnosť. Pri procese nacenenia zákazky získate predstavu o procese realizácie a jednotlivých materiáloch. Po upresnení základných parametrov diela obdržíte predbežnú cenovú ponuku s garanciou ceny na meter štvorcový. Schválením ponuky a odoslaním objednávky obdržíte zmluvu o dielo so zálohovou faktúrou. Počas spracovania objednávky Vás kontaktujeme ohľadom termínu realizácie a v prípade nutnosti ohľadom obhliadky stavby pre upresnenie detailov.",
    button: "Výpočet ceny diela na kľúč",
  },
  {
    title: "Objednanie materiálu s prepočtom na m2",
    description:
      "Túto možnosť zvolí klient, ktorý si chce objednať kompletný materiál potrebný na realizáciu diela no montáž si chce uskutočniť vo vlastnej réžii. Naceňovač na základe klientom uvedených parametrov presne vypočíta druh a počet prvkov potrebných pre realizáciu. Pri procese naceňovania získate potrebné informácie k správnemu prevedeniu realizácie a jednotlivým fázam montáže. V posledných krokoch si klient zvolí či má záujem aj o doručenie materiálu alebo o vyzdvihnutie na centrálnom sklade. K zmluve o dielo a zálohovej faktúre bude priložený príslušný návod na montáž. ",
    button: "Výpočet ceny materiálnu na M2 ",
  },
  {
    title: "Objednanie formou e-shopu",
    description:
      "Nákup materiálu formou e-shopu slúži pre klientov či firmy, ktorí majú záujem o presný počet kusov jednotlivých položiek z našej ponuky. Túto možnosť zvolí klient, ktorý vie o aký profil v akom počte kusov s akým príslušenstvom potrebuje k zrealizácii diela. Výstupom cenovej ponuky je zálohová faktúra. Materiál Vám po spracovaní objednávky a zaplatení faktúry v plnej sume doručíme na zvolenú adresu alebo si poň môžete prísť na sklad. Pokiaľ je zvolený materiál skladom obdržíte ho do pätnástich dní od vystavenia objednávky. Platba v hotovosti nie je možná. V prípade, ak objednaný tovar nie je skladom, dodanie a platobné podmienky sa dohodnú individuálne. Klient v tomto prípade zaplatí rezervačnú zálohu 30% a zostatok pred samotným dodaním.",
    button: "Nákup materiálu | e-shop",
  },
];

const PricesOffer = async () => {
  const myBlurDataUrl = await getBase64(`${process.env.URL}/cennik2.jpg`);
  return (
    <>
      <div className="main_section">
        <h2>Cenová ponuka</h2>
        <p className="text-primary">
          Vypracovali sme pre Vás jednoduchý naceňovací systém fungujúci na
          princípe konfigurátora automobilov. Naceňovač Vám vie vypočítať
          celkovú hodnotu diela na klúč s rozdelením sumy na materiál, montáž a
          vedľajšie rozpočtové náklady. Pri procese nacenenia terasy či fasády
          Vás sprevádzajú vysvetlenia jednotlivých krokov procesu montáže spolu
          s grafickými vizualizáciami pre čo možno najlepšiu predstavu finálneho
          diela. Naceňovač ponúka možnosť nákupu samostatného materiálu aj
          formou e-shopu pre klientov či firmy, ktorí majú záujem o presný počet
          kusov jednotlivých položiek z našej ponuky.
        </p>
      </div>
      <div className="relative">
        <Image
          src={"/cennik2.jpg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full  md:h-full max-h-[600px] object-cover "
          placeholder="blur"
          blurDataURL={myBlurDataUrl}
        />
        <div className="absolute z-[100] bottom-0 left-1/2 transform -translate-x-1/2  bg-secondary rounded-[8px] w-48 h-48 p-8 -mb-20">
          <IconCalculateGreen />
        </div>
      </div>
      <div className="main_section">
        <p className="text-primary text-center mb-8">
          Naceňovač ponúka 3 možnosti nákupu:
        </p>
        {three_text.map((object, index) => (
          <div className="flex flex-col mb-16" key={index}>
            <h6>{object.title}</h6>
            <p className="pt-8 text-primary">{object.description}</p>
            <button className="btn btn--primary">{object.button}</button>
          </div>
        ))}
      </div>
      <Image
        src={"/cennik2.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority={true}
        className="w-full  md:h-full max-h-[600px] object-cover "
        placeholder="blur"
        blurDataURL={myBlurDataUrl}
      />
      <div className="main_section">
        <p className="text-primary">
          V cenovej ponuke bez obhliadky nedokážeme obsiahnuť každý požadovaný
          detail vyhotovenia podľa predstavy klienta. V prípade, že sa pred
          realizáciou ponuka neupresní obhliadkou stavby, máme zaužívaný
          montážny postup pri ktorom si klient s montážnou skupinou počas prvého
          dňa realizácie prejde jednotlivé možnosti vypracovania detailov ako sú
          lištovania či špaletovania okenných rámov a podobne. Pokiaľ klient
          všetky detaily neupresní v naceňovači budú zadefinované v preambule
          zmluvy cenou na bm (bežný meter) a po ukončení realizácie a odovzdaní
          diela sa detaily doplatia podľa skutočnej spotreby.
        </p>
        <p className="text-primary mt-8">
          Termín realizácie sa upresňuje až po zaplatení zálohy 60% z celkovej
          sumy zákazky. Pokiaľ je odstup od podpisu zmluvy do realizácie dlhší
          ako 3 mesiace, zálohu môže klient zaplatiť na dva krát.
        </p>
        <p className="text-primary mt-8">
          Zmluva o dielo garantuje cenu za m2 obloženej plochy, podľa schválenej
          cenovej ponuky, kde klient uvádza predpokladanú plochu realizácie.
          Zákazník zaplatí doplatkovú sumu 40% na základe zamerania celkovej
          obloženej plochy po dokončení diela. Celková obložená plocha sa
          vypočíta po záverečnom zmeraní a zrátaní všetkých plôch vynásobením
          garantovanou jednotkovou cenou za m2.
        </p>
        <p className="text-primary mt-8">
          Garanciou ceny realizácie diela na m2 obloženej plochy je krytý nielen
          klient ale aj realizátor. Počas dlhoročných skúseností sa nám neraz
          stalo, že plocha v cenovej ponuke nezodpovedala reálne obkladanej
          ploche zákazky. V prípade, ak má klient v schválenej a zazmluvnenej
          cenovej ponuke celkovú sumu na obklad 100m2 a obloží sa len 90m2,
          zaplatí len za obložených 90m2. Zvyškový materiál odvezieme spolu s
          odpadom stavby. Na druhej strane, pokiaľ na príklad klient v
          naceňovači milne uvedie obkladanú plochu 90m2, a po zazmluvnení
          zákazky sa pri realizácii obloží až 100m2, klient je povinný zaplatiť
          za reálnu obloženú plochu 100m2. Počas realizácie sa s klientom
          potreba dodatočného obkladu odkomunikuje a s obkladaním výrazne väčšej
          plochy sa pokračuje až po súhlase klienta.{" "}
        </p>
      </div>
    </>
  );
};

export default PricesOffer;
