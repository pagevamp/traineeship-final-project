import Box from "@/components/ui/box";

const infoData = [
  {
    imgSrc: "/Group 299.svg",
    title: "Total Employees ",
    number: 150,
  },
  {
    imgSrc: "/Group 290.svg",
    title: "Total Departments",
    number: 130,
  },
  {
    imgSrc: "/Group 293.svg",
    title: "Rejected",
    number: 750,
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
