import Image from "next/image";

const buttons = [
  {
    nunber: "3000+",
    description: "realizácii terás",
  },
  {
    nunber: "25",
    description: "rokov záruky na farebnú stálosť",
  },
  {
    nunber: "5",
    description: "rokov záruky na montáž",
  },
  {
    nunber: "4500+",
    description: "realizácii fasád",
  },
];

interface Props {
  o_nas_nadpis: string;
  o_nas_popis: string;
  button_citat_viac: string;
  o_nas_elements: string[];
  rokov_skusenosti: string;
}

const HomePageAboutUs = ({
  o_nas_nadpis,
  o_nas_popis,
  button_citat_viac,
  o_nas_elements,
  rokov_skusenosti,
}: Props) => {
  return (
    <div className="relative  w-full">
      <Image
        src="/o_nas.jpg"
        alt="Obrazok"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <div className="relative flex flex-col justify-center text-white  z-20 main_section">
        <h3 className="custom-underline text-white mb-32 2xl:mb-[70px] ">
          {o_nas_nadpis}
        </h3>
        <p className="mb-4 md:max-w-[70%]">{o_nas_popis}</p>
        <div className="flex max-w-[70%] md:justify-end">
          <button className="btn btn--secondary">{button_citat_viac}</button>
        </div>
      </div>
      <div className="bg-[#D9D5CF] absolute right-0 top-1/2 transform -translate-y-1/2 z-[10] rounded-l-[8px] p-16 hidden xl:block">
        <h4>20+</h4>
        <h6>{rokov_skusenosti}</h6>
      </div>

      <div className="w-full border-t border-white z-20">
        <div className="navbar_section">
          <div className="flex flex-col md:flex-row justify-between ">
            {buttons.map((one_button, index) => (
              <div className="flex flex-col items-center" key={index}>
                <button className="btn btn--tertiary !max-w-none !w-[150px] !text-[24px]">
                  {one_button.nunber}
                </button>
                <p className="uppercase text-center max-w-[180px] z-50">
                  {o_nas_elements[index] != ""
                    ? o_nas_elements[index]
                    : one_button.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageAboutUs;
