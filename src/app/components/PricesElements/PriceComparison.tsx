"use client";
import {
  terracePriceTimbermax,
  terracePriceTimbermaxOther,
  terracePriceTimbermaxPerYear,
} from "@/app/lib/functionsClient";
import { Slider } from "@mui/material";
import { useState } from "react";
import IconTrees from "../Icons/IconTrees";
import WhiteLine from "../WhiteLine";
import { PhotoSizeSelectActual } from "@mui/icons-material";

const PriceComparison = () => {
  const [sliderSize, setSliderSize] = useState(20);
  const [sliderYears, setSliderYears] = useState(25);

  const handleChangeSize = (event: Event, newValue: number | number[]) => {
    setSliderSize(newValue as number);
  };

  const handleChangeYears = (event: Event, newValue: number | number[]) => {
    setSliderYears(newValue as number);
  };

  return (
    <div className="navbar_section !mt-16">
      <div className="flex flex-col md:flex-row bg-[#877C6B] rounded-t-[8px] md:h-[250px] justify-center relative gap-16 md:gap-40">
        <div className="flex flex-col items-center gap-16">
          <button className="btn btn--secondary !m-0 !rounded-t-[0px]  z-10 uppercase hover:!bg-secondary !cursor-default text-[#51493F]">
            Cenový porovnávač
          </button>

          <p className="max-w-[300px] text-center">
            Zadajte veľkosť požadovanej terasy pre prehľad o odhadovaných
            nákladoch na jej výstavbu a aj budúcu údržbu
          </p>
        </div>

        <div className="flex flex-col md:w-[40%] justify-center gap-10 p-8 md:p-0">
          <div className="flex flex-col">
            <p className="uppercase">Veľkosť terasy</p>
            <div className="flex flex-row gap-8 items-center">
              <Slider
                defaultValue={20}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChangeSize}
                min={10}
                sx={{
                  color: "#ffffff",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#ffffff",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#ffffff",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#e0e0e0",
                  },
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "#ff5722",
                    color: "#fff",
                    display: "none",
                  },
                  "& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb:active":
                    {
                      boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.16)",
                    },
                }}
              />
              <div className="w-[120px]">
                <p>{sliderSize} m²</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="uppercase">Plánované použitie terasy</p>

            <div className="flex flex-row gap-8 items-center">
              <Slider
                defaultValue={25}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChangeYears}
                max={25}
                min={5}
                sx={{
                  color: "#ffffff",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#ffffff",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#ffffff",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#e0e0e0",
                  },
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "#ff5722",
                    color: "#fff",
                    display: "none",
                  },
                  "& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb:active":
                    {
                      boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.16)",
                    },
                }}
              />
              <div className="w-[120px]">
                <p>{sliderYears} rokov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="">
          <div className="flex flex-col bg-[#71745D] items-center p-16 comparison">
            <h5 className="uppercase text-white">Timbermax</h5>
            <p className="pt-16">Cena Vašej terasy za {sliderYears} rokov</p>
            <p>{terracePriceTimbermaxPerYear(sliderSize, sliderYears)} €/rok</p>
            <WhiteLine />
            <p>Počiatočná investícia:</p>

            <p className="pt-16">Cena terasy</p>
            <p>{terracePriceTimbermax(sliderSize)} €</p>

            <p className="pt-16">Inštalácia, preprava, príslušenstvo</p>
            <p>{terracePriceTimbermaxOther(sliderSize)} €</p>
            <WhiteLine />
            <p>Cenové náklady na údržbu</p>
            <p>za {sliderYears} rokov:</p>

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
            <p className="pt-16">Cena Vašej terasy za {sliderYears} rokov</p>
            <p>144 €/rok</p>
            <WhiteLine />
            <p>Počiatočná investícia:</p>

            <p className="pt-16">Cena terasy</p>
            <p>2680 €</p>

            <p className="pt-16">Inštalácia, preprava, príslušenstvo</p>
            <p>920 €</p>
            <WhiteLine />
            <p>Cenové náklady na údržbu</p>
            <p>za {sliderYears} rokov:</p>

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
            <p className="pt-16">Cena Vašej terasy za {sliderYears} rokov</p>
            <p>144 €/rok</p>
            <WhiteLine />
            <p>Počiatočná investícia:</p>

            <p className="pt-16">Cena terasy</p>
            <p>2680 €</p>

            <p className="pt-16">Inštalácia, preprava, príslušenstvo</p>
            <p>920 €</p>
            <WhiteLine />
            <p>Cenové náklady na údržbu</p>
            <p>za {sliderYears} rokov:</p>

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
