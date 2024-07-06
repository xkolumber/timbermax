import React from "react";
import IconServiceVariants from "../Icons/IconServiceVariants";
import IconServiceFeatures from "../Icons/IconServiceFeatures";
import IconServiceInstallation from "../Icons/IconServiceInstallation";
import IconServiceProfile from "../Icons/IconServiceProfile";
import IconServiceOrder from "../Icons/IconServiceOrder";

const icon_text = [
  {
    icon: <IconServiceVariants />,
    text: "Farebné varianty",
  },
  {
    icon: <IconServiceFeatures />,
    text: "Vlastnosti",
  },
  {
    icon: <IconServiceInstallation />,
    text: "Montáž",
  },
  {
    icon: <IconServiceProfile />,
    text: "Profily",
  },
  {
    icon: <IconServiceOrder />,
    text: "Postup objednania",
  },
];

const ServiceAnotherInfo = () => {
  return (
    <div className="bg-secondary">
      <main className="main_section">
        {" "}
        <h4 className="text-tertiary">Ďalšie informácie</h4>
        <p className="text-tertiary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop
        </p>
      </main>
      <div className="navbar_section">
        <div className="grid grid-cols-5">
          {icon_text.map((object, index) => (
            <div
              className="flex flex-col hover:border-[1.4px] hover:border-[#1D281F] rounded-[8px] justify-center items-center gap-6 p-4"
              key={index}
            >
              <div className="w-32 full">{object.icon}</div>
              <p className="uppercase text-[#1D281F]">{object.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAnotherInfo;
