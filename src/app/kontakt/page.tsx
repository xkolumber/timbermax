import SwiperContactPage from "../components/SwiperContactPage";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="main_section additional_padding">
        <h1 className="text-primarz">Kontakt</h1>
        <p className="text-primary">
          Dosky Timbermax máte teraz v blízkosti Vášho domova.
        </p>
        <p className="text-primary pt-4">
          Pripravili sme pre Vás exteriérovú výstavu všetkých farieb a profilov
          Timbermax. Dosky si môžete pozrieť, chytiť, prirovnať si k nim vzorky
          materiálov použitých v interiéri...
        </p>
        <p className="text-primary pt-4">
          V prípade potreby konzultácie zavoláte na infolinku priamo zo
          vzorkovne a odpovieme Vám na akýkoľvek dotaz.
        </p>
        <Image
          src="/showroom_new.svg"
          className="w-full h-full object-cover min-h-[200px] pt-8 pb-8 "
          alt="referencie"
          width={1000}
          height={1000}
          quality={100}
          priority
        />
        <h3 className="custom-underline !mb-0 mt-16">Prevádzky</h3>
      </div>
      <SwiperContactPage />
      <div className="main_section">
        <p className="text-primary">
          Sídlo firmy Bottova 1, 811 09 Staré Mesto Po schválení predbežnej
          cenovej ponuky je možné dohodnúť si osobné stretnutie buď priamo na
          stavbe u klienta alebo v našich kancelárskych priestoroch. Interný
          architekt je pripravený prekonzultovať s Vami možnosti osadenia
          terasových a fasádnych obkladov. Vieme spracovať návrh a vizualizácie
          osadenia obkladov, vykresliť technické detaily a realizačné detaily
          stavby. V prípade potreby konzultácie technických riešení nás
          kontaktujete telefonicky alebo mailom a odpovieme Vám na akýkoľvek
        </p>
      </div>
    </>
  );
};

export default page;
