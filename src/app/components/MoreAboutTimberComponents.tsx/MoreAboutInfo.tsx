import React from "react";
import Image from "next/image";
import getBase64 from "@/app/lib/functions";

const MoreAboutInfo = async () => {
  const myBlurDataUrl0 = await getBase64(`${process.env.URL}/viac-o.svg`);
  const myBlurDataUrl = await getBase64(`${process.env.URL}//terasa.jpg`);

  return (
    <div className=" ">
      <div className="main_section additional_padding w-full justify-center items-center">
        <h2 className="">Viac o Timbermaxe</h2>
        <p className="text-primary ">
          Timbermax® je dominantnou značkou dizajnových kompozitných profilov.
          Timbermax sa od ostatných obdobných produktov na trhu odlišuje
          predovšetkým dizajnom a materiálovým zložením. Snaha priblížiť sa
          vzhľadu pravého dreva priniesla po dlhých rokoch výskumu reálne
          výsledky.{" "}
        </p>
        <p className="mt-8 text-primary">
          Terasové a fasádne dosky Timbermax sú dvojvrstvové kompozitné profily
          skladajúce sa z jadra a povrchovej vrstvy, ktorá zabezpečuje všetky
          najdôležitejšie technické a úžitkové vlastnosti. Vďaka jedinečnej
          skladbe a dizajnu Timbermax okrem vzhľadu vyniká medzi ostatnými
          kompozitnými terasovými a fasádnymi doskami aj svojimi technickými
          vlastnosťami. Timbermax je na rozdiel od drvivej väčšiny WPC dosiek
          svojím vzhľadom a úžitkovými vlastnosťami skutočne bezúdržbovou
          alternatívou dreva pri použití v exteriéri.
        </p>
        <Image
          src={"/viac-o.svg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL={myBlurDataUrl0}
        />
        <p>
          Podrobnejšie porovnanie kompozitných dosiek Timbermax s bežnými WPC
          profilmi a drevinami:
        </p>
      </div>
      <div className="relative">
        <button className="btn btn--secondary absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Timbermax vs Konkurencia
        </button>
        <Image
          src={"/terasa.jpg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full h-[600px] md:h-full max-h-[800px] object-cover"
          placeholder="blur"
          blurDataURL={myBlurDataUrl}
        />
      </div>
      <div className="main_section">
        <p className="text-primary">
          Vďaka unikátnemu vzhľadu a bezkonkurenčným technickým parametrom sú
          kompozitné dosky Timbermax vhodným materiálom na využitie v
          stavebníctve práve na miestach kde je drevo príliš náročné na údržbu a
          z dlhodobého hladiska nerentabilné ako vhodná investícia.{" "}
        </p>{" "}
        <p className="mt-4 text-primary">
          Pre lepšiu predstavu by sme uvideli príklad na základe našich
          dlhoročných skúseností z praxe. Najvhodnejším bude golfové stredisko v
          Šajdíkových Humenciach, kde sme už pred desiatimi rokmi obkladali
          jedny z prvých stavieb v novo vytvorenej chatárskej zóne fasádnymi
          profilmi Timbermax. Postupom času vyrástla súvislá zástavba s prevahou
          drevených fasád, ktoré sú preferované v zadefinovanom územnom pláne
          oblasti. V posledných rokoch sme mimo nových objednávok od susedov v
          oblasti obdržali niekoľko žiadostí na výmenu obkladu dreva za
          bezúdržbové fasádne profily. Počas rokov zvetrávania neudržiavaných
          drevených dosiek na fasáde si ľudia v susedstve uvedomili benefity
          vlastností profilov Timbermax a postupne si drevenné obklady vymieňajú
          za kompozity. Tento príklad je vhodný s ohľadom na niekoľko faktorov.
          Obklady fasád z dreva a kompozitov boli realizované v rovnakom čase a
          v tesnej blízkosti. Majitelia stavieb si tak mohli odsledovať
          vlastosti a správanie materiálov s ohľadom na dlhodobé hladisko a
          pomer hodnoty počiatočnej investície. Stálofarebný fasádny obklad
          Timbermax doslova svieti medzi stavbami obloženými drevom s viditeľným
          opotrebovaním materiálu. Uvedený príklad neplatí pre drevené fasády
          udržiavané minimálne dva krát do roka od počiatočnej realizácie.
          Prehodnotenie a porovnanie sumy počiatočných nákladov WPC farsády s
          drevennou fasádou a jej nevyhnutnou údržbou je už na klientovi.{" "}
        </p>{" "}
        <p className="mt-4 text-primary">
          {" "}
          Cieľom výrobcov drevo-plastových kompozitov je nahradiť drevo v
          exteriéri, kde najmä vplyv UV žiarenia degraduje jeho kvality a
          vzhľad. Vlastnosti dreva sa dajú zachovať len patričnou
          starostlivosťou a údržbou čo je časovo a finančne náročné.
        </p>
      </div>
      <Image
        src={"/viac-info.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority
        className="w-full h-full object-cover max-h-[300px]"
      />
      <div className="main_section">
        <p className="text-primary">
          Timbermax svojím vzhľadom dokáže uspokojiť tých najnáročnejších
          zákazníkov, ktorým imponuje drevo svojou nezameniteľnou krásou. V
          oblasti priblíženia sa vzhľadu drevených terás či fasád je povrchová
          úprava kompozitných dosiek Timbermax najlepšou voľbou na trhu.{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="btn btn--fourthtiary">Timbermax Exotic</button>
          <button className="btn btn--secondary border border-black">
            Timbermax Rustic
          </button>
        </div>
        <p className="text-primary">
          Ako z názvu vyplýva, ambíciou kompozitných profilov Timbermax EXOTIC
          je nahradiť exotické dreviny.
        </p>
      </div>
      <Image
        src={"/o_nas.jpg"}
        alt="hlavna_fotka"
        height={1000}
        width={1000}
        quality={100}
        priority
        className="w-full h-full object-cover max-h-[300px]"
      />
      <div className="main_section">
        <p className="text-primary">
          Doska Exotic sa skladá z WPC jadra a povrchovej vrstvy Protect shell,
          ktorá sa na povrch nanáša v jednom procese dvojitej extrúzie a keďže
          jadro drevoplastového profilu obsahuje ten istý komponent (HDPE), je
          tento ochranný obal neodstrániteľný. Úlohou obalu je zabezpečiť také
          vlastnosti terasových a fasádnych dosiek, aké neposkytuje drevo a ani
          bežné drevoplasty wpc vyrábané jednoduchou extrúziou.
        </p>
        <Image
          src={"/viac-o-2.svg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority
          className="w-full h-full object-cover "
        />
        <p className="text-primary">
          Kompozitné profily Timbermax Exotic svojím vzhľadom verne pripomínajú
          exotické dreviny, ktoré dokážu navodiť pocit luxusu a exotiky. Klient
          si môže vybrať podľa svojej preferencie či chce mať dosky na
          obkladanej ploche v jednom, alebo viacerých odtieňoch. Pri obklade je
          možné striedať nielen farebné odtiene podľa vzorkovníka no aj gradient
          jednej farebnosti. Technológia nanášania a miešania farieb je založená
          na náhodnom pomerovom množstve. Forma výrobného procesu zabezpečuje,
          že každá šarža výroby je jemne odlišná. Cieľom je dosiahnuť jedinečné
          pohľadové vlastnosti drevenej dosky.
        </p>
        <p className="mt-8 text-primary">
          Ľahko umývateľný povrch a odolnosť voči fľakom
        </p>{" "}
        <p className="mt-4 text-primary">
          Kompozitné dosky Timbermax Exotic sa dodávajú s 25 ročnou zárukou na
          odolnosť voči fľakom a iným bežným nečistotám. Vďaka tomu údržba
          terasy či fasády naozaj nemôže byť jednoduchšia. Dosky Timbermax
          EXOTIC sú ako stvorené pre použitie v exteriéri. Odolávajú všetkým
          poveternostným vplyvom v našich podmienkach. Nenasiakavý povrch je v
          nekrytých priestoroch dokonca samočistiaci - stačí počkať na najbližší
          dážď.
        </p>
      </div>
    </div>
  );
};

export default MoreAboutInfo;
