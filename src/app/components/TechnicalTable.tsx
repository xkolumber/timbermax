import React from "react";

const TechnicalTable = () => {
  return (
    <div className="navbar_section">
      <div className="w-full">
        <table id="my_table" className="w-full mt-8 border-collapse ">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100">
              <th className="  !px-16  w-1/4 text-left">Testovaný parameter</th>
              <th className=" ">Skúšobná norma</th>
              <th className=" ">Timbermax</th>
              <th className="  ">Bežné WPC</th>
              <th className=" ">Lepšia hodnota</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr>
              <th className="!px-16  text-left !bg-[#4A594C] border-b border-secondary">
                pevnosť v ohybe
              </th>
              <td className=" ">
                ASTM - D4060 -10
                <span className="font-bold"></span>
                <br />
              </td>
              <td className="">25,8 Mpa</td>
              <td className="">25 - 27</td>
              <td className="">pozorovateľná</td>
            </tr>

            <tr>
              <th className=" !px-16   text-left !bg-[#4A594C] border-b border-secondary">
                odolnosť voči oderu
              </th>
              <td className=" px-4">
                ASTM - D4060 - 10 <br />
                1000 cyklov
              </td>
              <td className=" px-4 py-2">17 mg</td>
              <td className=" px-4 py-2">50 mg a viac</td>
              <td className=" px-4 py-2">Timbermax</td>
            </tr>

            <tr>
              <th className=" !px-16 py-2  text-left !bg-[#4A594C] border-b border-secondary">
                odolnosť voči poškrabaniu
              </th>
              <td className="  px-4 py-2">
                FLTM B0 <br />
                162-01:2009
              </td>
              <td className=" px-4 py-2">22 N</td>
              <td className=" px-4 py-2">6 - 8 N</td>
              <td className=" px-4 py-2">Timermax</td>
            </tr>

            <tr>
              <th className=" !px-16 py-2  text-left !bg-[#4A594C] border-b border-secondary">
                protišmykovosť
              </th>
              <td className=" px-4 py-2">DIN51130-2010</td>
              <td className=" px-4 py-2">
                19,7-R11 <br /> 35 - R13
              </td>
              <td className=" px-4 py-2">R9 - R13</td>
              <td className=" px-4 py-2">pozorovateľné</td>
            </tr>

            <tr>
              <th className=" !px-16 py-2  text-left !bg-[#4A594C] border-b border-secondary">
                absorpcia vody
              </th>
              <td className="px-4 py-2">ASTM - D1037</td>
              <td className=" px-4 py-2">0,14 %</td>
              <td className="px-4 py-2">0,50% a viac</td>
              <td className=" px-4 py-2">Timbermax</td>
            </tr>

            <tr>
              <th className=" !px-16  py-2  text-left !bg-[#4A594C] border-b border-secondary">
                1000 h. UV test <br /> umelé stárnutie zmena odtieňa
              </th>
              <td className=" px-4 py-2">ISO4892-2:2006</td>
              <td className=" px-4 py-2">AE = 1,2</td>
              <td className=" px-4 py-2">3 - 5</td>
              <td className=" px-4 py-2">Timbermax</td>
            </tr>

            <tr>
              <th className=" !px-16  py-2 text-left !bg-[#4A594C]">
                pevnosť v ohybe
              </th>
              <td className="  px-4 py-2">EN ISO 11925-2:2010</td>
              <td className="  px-4 py-2">D</td>
              <td className="  px-4 py-2">E</td>
              <td className=" px-4 py-2">Timbermax</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicalTable;
