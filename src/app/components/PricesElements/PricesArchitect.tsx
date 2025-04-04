const data = [
  {
    title: "Zameranie stavby / Obhliadka",
    price: "40€/hod",
    desc: "Ak klient nemá schválenú predbežnú cenovú ponuku, no napriek tomu si želá konzultáciu alebo návrh, môžeme tieto služby poskytnúť za dohodnutý cenový rozsah. Týmto spôsobom zabezpečíme, že aj bez schválenia hlavnej ponuky klient získa požadované poradenstvo alebo návrh, pričom náklady budú jasne stanovené vopred.",
  },
  {
    title: "Zameranie stavby / Obhliadka",
    price: "40€/hod",
    desc: "Ak klient nemá schválenú predbežnú cenovú ponuku, no napriek tomu si želá konzultáciu alebo návrh, môžeme tieto služby poskytnúť za dohodnutý cenový rozsah. Týmto spôsobom zabezpečíme, že aj bez schválenia hlavnej ponuky klient získa požadované poradenstvo alebo návrh, pričom náklady budú jasne stanovené vopred.",
  },
  {
    title: "Zameranie stavby / Obhliadka",
    price: "40€/hod",
    desc: "Ak klient nemá schválenú predbežnú cenovú ponuku, no napriek tomu si želá konzultáciu alebo návrh, môžeme tieto služby poskytnúť za dohodnutý cenový rozsah. Týmto spôsobom zabezpečíme, že aj bez schválenia hlavnej ponuky klient získa požadované poradenstvo alebo návrh, pričom náklady budú jasne stanovené vopred.",
  },
  {
    title: "Zameranie stavby / Obhliadka",
    price: "40€/hod",
    desc: "Ak klient nemá schválenú predbežnú cenovú ponuku, no napriek tomu si želá konzultáciu alebo návrh, môžeme tieto služby poskytnúť za dohodnutý cenový rozsah. Týmto spôsobom zabezpečíme, že aj bez schválenia hlavnej ponuky klient získa požadované poradenstvo alebo návrh, pričom náklady budú jasne stanovené vopred.",
  },
];

const PricesArchitect = () => {
  return (
    <main>
      <div className="bg-secondary">
        <div className="main_section ">
          <h4 className="text-tertiary custom-underline">Služby architekta</h4>
          <p className="text-tertiary">
            Ak potrebujete návrh riešenia pre obklad fasády, terasy, plotu alebo
            iné individuálne požiadavky, ponúkame Vám služby architekta, ktorý s
            Vami prekonzultuje možnosti osadenia obkladov a iných prvkov podľa
            Vašich predstáv. Pripravíme pre Vás návrh a vizualizácie, vrátane
            technických a realizačných detailov prispôsobených na mieru
            konkrétnemu projektu.
          </p>
          <p className="pt-8 text-tertiary">
            V prípade potreby konzultácie technických riešení nás neváhajte
            kontaktovať telefonicky alebo e-mailom, radi zodpovieme všetky Vaše
            otázky a navrhneme optimálne riešenia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mt-16">
            {data.map((object, index) => (
              <div
                className="bg-[#71745D] rounded-[8px] p-24 flex flex-col items-center"
                key={index}
              >
                <p className="scale-[1.2] text-center">{object.title}</p>
                <p className="text-center">{object.price}</p>
                <p className="pt-16 text-center">{object.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-8">
            <p className="text-black">Ceny neobsahujú dph.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PricesArchitect;
