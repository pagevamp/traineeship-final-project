import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const directorDetails = [
  {
    id: 1,
    name: "Rohan Kulkarni",
    email: "rahul@gmail.com",
    phone: "9824356541",
  },
  {
    id: 2,
    name: "Manoj Ashish",
    email: "San@gmail.com",
    phone: "8197765113",
  },
];

const Director = () => {
  return (
    <div>
      <div className="bg-[#ffffff] w-[1110px] pl-[30px] pr-[57px] rounded-[25px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#0B0704] text-[16px] font-primary ">
                SN
              </TableHead>
              <TableHead className="text-[#0B0704] text-[16px] font-primary ">
                Directors Name
              </TableHead>
              <TableHead className="text-[#0B0704] text-[16px] font-primary ">
                Email
              </TableHead>
              <TableHead className="text-[#0B0704] text-[16px] font-primary ">
                Phone
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {directorDetails.map((item) => (
              <TableRow
                key={item.id}
                className="text-[#0B0704] text-[13px] font-secondary pb-[25px] pt-[19px]"
              >
                <TableCell className="text-[13px] font-secondary pb-[25px] pt-[19px]">
                  {item.id}
                </TableCell>
                <TableCell className="text-[13px] font-secondary pb-[25px] pt-[19px]">
                  {item.name}
                </TableCell>
                <TableCell className="text-[13px] font-secondary pb-[25px] pt-[19px]">
                  {item.email}
                </TableCell>
                <TableCell className="text-[13px] font-secondary pb-[25px] pt-[19px]">
                  {item.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Director;
