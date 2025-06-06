import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Director from "./director";
import Finance from "./financeManger";
import Referral from "./referral";
import Documents from "./document";
import BankDetails from "./bankDetails";

const accordionData = [
  {
    title: "Directors Details",
    content: <Director />,
  },
  {
    title: "Finance Manager Information",
    content: <Finance />,
  },
  {
    title: "Referral Details",
    content: <Referral />,
  },
  {
    title: "Bank Details",
    content: <BankDetails />,
  },
  {
    title: "Documents",
    content: <Documents />,
  },
  {
    title: "Product List",
    content:
      "This section contains a detailed list of the products or services offered by the company, including product names, categories, and brief descriptions for each item.",
  },
];

const InfoBar = () => {
  return (
    <div>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className={cn(
            "bg-white rounded-[20px]",
            "w-full",
            "sm:w-[600px] md:w-[800px] lg:w-[1110px]",
            index !== 0 ? "mt-[15px]" : ""
          )}
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="font-primary text-[20px] text-[#232323] px-4 py-4">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-[#232323] px-4 pt-2 pb-4 text-[15px]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default InfoBar;
