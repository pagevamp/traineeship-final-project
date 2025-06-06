import { Upload, FilePenLine, Download } from "lucide-react";
import Image from "next/image";

const actions = [
  {
    label: "Upload Contract",
    image: "/uploadgrey.svg",
    color: "#D0D0D0",
  },
  {
    label: "Sign Contract",
    image: "/penorange.svg",
    color: "#FF6502",
  },
  {
    label: "Download Contract",
    image: "/greendown.svg",
    color: "#00B69B",
  },
];

const Admin = () => {
  return (
    <div className="w-[1110px] h-[126px] bg-[#ffffff] rounded-[25px] px-[49px] pb-[21px] flex flex-col items-center justify-center">
      <h2 className="text-[16px] font-primary text-center text-[#0B0704] mb-4">
        Admin Department
      </h2>

      <div className="grid grid-cols-3 gap-x-[61px]">
        {actions.map(({ label, image, color }, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[48px] border rounded-lg flex items-center justify-center gap-[41px]"
            style={{ borderColor: color }}
          >
            <span className="font-primary text-[14px]" style={{ color }}>
              {label}
            </span>
            <Image src={image} alt="icons" width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
