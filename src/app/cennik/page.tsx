import PricesDescription from "../components/PricesElements/PricesDescription";
import PricesIntro from "../components/PricesElements/PricesIntro";
import Image from "next/image";
import PricesOffer from "../components/PricesElements/PricesOffer";
const page = () => {
  return (
    <div className="relative">
      <PricesIntro />
      <div className="main_section">
        <h2>Ceny a spôsob objednania</h2>
        <p className="text-primary">
          Vieme, že naše služby sú jedny z drahších v porovnaní s firmami
          ponúkajúcimi obdobné kompozitné materiály. Treba si však uvedomiť, že
          materiálová skladba profilov v našej ponuke spolu s dizajnom dosiek
          značky Timbermax® sa s obdobnými materiálmi na Európskom trhu
          kvalitatívne nedá porovnať. Cena materiálu v tomto prípade reálne
          zodpovedá jeho kvalite čo zastrešuje aj zmluvne garantovaná záruka 25
          rokov na farebnú stálosť, odolnosť voči škvrnám a fľakom. Interne
          upravený výrobný proces, dizajn profilov a vlastný systém prvkov
          uchytenia tvoria komplexnosť finálneho diela s bezkonkurečnými
          vlastnosťami. Zabezpečujeme dlhoročnú spokojnosť a bezstarostné
          úžívanie odovzdaného diela. Klienti nás po dlhých rokoch užívania
          terasy či fasády často kontaktujú so žiadosťami o doplnenie prvkov
          projektu či realizácie nových projektov. Spolupracujeme taktiež s
          viacerými architektonickými a stavebnými firmami. Dôraz na kvalitne
          odvedenú prácu sa po rokoch na trhu zúročil a značka Timbermax® sa bez
          platenej reklamy, iba vďaka kvalitným odporúčaniam, stala jednotkou na
          trhu v celej strednej Európe.{" "}
        </p>
        <p className="text-center text-primary mt-8">
          Pre rýchlu orientáciu ponúkame stručný prehľad jednotlivých možností:
        </p>
        <Image
          src={"/cennik_material.svg"}
          alt="hlavna_fotka"
          height={1000}
          width={1000}
          quality={100}
          priority={true}
          className="w-full  md:h-full max-h-[600px] object-cover"
        />
      </div>
      <PricesDescription />
      <PricesOffer />
    </div>
  );
};

export default page;
