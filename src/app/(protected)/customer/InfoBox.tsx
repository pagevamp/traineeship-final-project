// components/ui/InfoBoxGroup.tsx

import Box from "@/components/ui/box";

const infoData = [
  {
    imgSrc: "/Group 299.svg",
    title: "Total Customer ",
    number: 5750,
  },
  {
    imgSrc: "/Group 292.svg",
    title: "Pending",
    number: 130,
  },
  {
    imgSrc: "/Group 293.svg",
    title: "Rejected",
    number: 750,
  },
  {
    imgSrc: "/Group 296.svg",
    title: "Approved",
    number: 5000,
  },
];

const InfoBox = () => {
  return (
    <div className="flex gap-6">
      {infoData.map((item, index) => (
        <Box
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default InfoBox;
