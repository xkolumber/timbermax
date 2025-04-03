import React from "react";
import WhiteLine from "../WhiteLine";
import IconTrees from "../Icons/IconTrees";

const PriceComparison = () => {
  return (
    <div className="navbar_section !mt-16">
      <div className="flex flex-col md:flex-row bg-[#877C6B] rounded-t-[8px] p-16 justify-between">
        <p className="max-w-[300px]">
          Zadajte veľkosť požadovanej terasy pre prehľad o odhadovaných
          nákladoch na jej výstavbu a aj budúcu údržbu
        </p>
        <div className="flex flex-col">
          <p className="uppercase">Veľkosť terasy</p>
          <p className="uppercase">Veľkosť terasy</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="">
          <div className="flex flex-col bg-[#71745D] items-center p-16 comparison">
            <h5 className="uppercase text-white">Timbermax</h5>
            <p className="pt-16">Cena Vašej terasy za 25 rokov</p>
            <p>144 €/rok</p>
            <WhiteLine />
            <p>Počiatočná investícia:</p>

            <p className="pt-16">Cena terasy</p>
            <p>2680 €</p>

            <p className="pt-16">Inštalácia, preprava, príslušenstvo</p>
            <p>920 €</p>
            <WhiteLine />
            <p>Cenové náklady na údržbu</p>
            <p>za 25 rokov:</p>

            <p className="pt-16">Kompletná výmena terasy (0x)</p>
            <p>0 €</p>

            <p className="pt-16">Materiál na pravidelnú údržbu</p>
            <p>0 €</p>
            <p className="pt-16">Čas investovaný do údržby za 15 rokov</p>
            <p className="scale-[1.2]">30 hod</p>
          </div>

          <div className="p-16 flex flex-col bg-[#B8B5A9] rounded-b-[8px] items-center relative text-center">
            <div className="absolute left-1/4 top-1/4">
              <IconTrees color="#818655" />
            </div>

            <p className="text-[#505133] font-semibold scale-[1.2]">žiadne</p>
            <p className="text-[#505133]">vyrúbané stromy</p>

            <div className="absolute right-1/4 top-1/4">
              <IconTrees color="#818655" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col bg-[#635A4F] items-center p-16 comparison">
            <h6 className="uppercase text-white font-extralight">
              Nekvalitné VPC
            </h6>
            <p className="pt-16">Cena Vašej terasy za 25 rokov</p>
            <p>144 €/rok</p>
            <WhiteLine />
            <p>Počiatočná investícia:</p>

            <p className="pt-16">Cena terasy</p>
            <p>2680 €</p>

            <p className="pt-16">Inštalácia, preprava, príslušenstvo</p>
            <p>920 €</p>
            <WhiteLine />
            <p>Cenové náklady na údržbu</p>
            <p>za 25 rokov:</p>

            <p className="pt-16">Kompletná výmena terasy (0x)</p>
            <p>0 €</p>

            <p className="pt-16">Materiál na pravidelnú údržbu</p>
            <p>0 €</p>
            <p className="pt-16">Čas investovaný do údržby za 15 rokov</p>
            <p className="scale-[1.2]">30 hod</p>
          </div>
          <div className="p-16 flex flex-col bg-[#B8B5A9] rounded-b-[8px] items-center relative text-center">
            <div className="absolute left-1/4 top-1/4">
              <IconTrees color="#787953" />
            </div>

            <p className="text-[#635A4F] font-semibold scale-[1.2]">žiadne</p>
            <p className="text-[#635A4F]">vyrúbané stromy</p>

            <div className="absolute right-1/4 top-1/4">
              <IconTrees color="#787953" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col bg-[#635A4F] items-center p-16 comparison">
            <h6 className="uppercase text-white font-extralight">
              Tropické drevo
            </h6>
            <p className="pt-16">Cena Vašej terasy za 25 rokov</p>
            <p>144 €/rok</p>
            <WhiteLine />
            <p>Počiatočná investícia:</p>

            <p className="pt-16">Cena terasy</p>
            <p>2680 €</p>

            <p className="pt-16">Inštalácia, preprava, príslušenstvo</p>
            <p>920 €</p>
            <WhiteLine />
            <p>Cenové náklady na údržbu</p>
            <p>za 25 rokov:</p>

            <p className="pt-16">Kompletná výmena terasy (0x)</p>
            <p>0 €</p>

            <p className="pt-16">Materiál na pravidelnú údržbu</p>
            <p>0 €</p>
            <p className="pt-16">Čas investovaný do údržby za 15 rokov</p>
            <p className="scale-[1.2]">30 hod</p>
          </div>
          <div className="p-16 flex flex-col bg-[#B8B5A9] rounded-b-[8px] items-center relative text-center">
            <p className="text-[#635A4F] font-semibold scale-[1.2]">6</p>
            <p className="text-[#635A4F]">vyrúbaných stromov</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
