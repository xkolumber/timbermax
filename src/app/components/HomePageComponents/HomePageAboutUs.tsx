import React from "react";
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

const HomePageAboutUs = () => {
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

      <div className="relative flex flex-col justify-center text-white p-4 md:pl-40  z-20 main_section">
        <h5 className="text-2xl font-bold mb-4">O nás</h5>
        <p className="mb-4 max-w-[630px]">
          Máme viac ako 20 rokov skúseností s WPC materiálmi, ich vlastnosťami a
          špecifickými požiadavkami na kvalitnú montáž. Pre klientov ponúkame
          spracovanie zákazky od jej nacenenia a obhliadky, cez návrh, až po
          realizáciu diela na klúč. Terasa spolu s fasádou prezentujú
          architektonické dielo a tvoria komplexný dojem celej stavby. Je preto
          podľa nás dôležité aby boli realizované z dlhotrvajúcich materiálov a
          montované technicky správnymi postupmi. Víziou firmy je detailnosť
          montáže a kvalita prevedenia realizácie.
        </p>
        <div className="btn btn--secondary">čítať viac</div>
      </div>

      <div className="w-full border-t border-white z-20">
        <div className="navbar_section">
          <div className="flex flex-row justify-between">
            {buttons.map((one_button, index) => (
              <div className="flex flex-col items-center" key={index}>
                <button className="btn btn--tertiary">
                  {one_button.nunber}
                </button>
                <p className="uppercase text-center max-w-[130px] z-50">
                  {one_button.description}
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
