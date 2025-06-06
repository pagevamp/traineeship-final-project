"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type RateCardRow = {
  destination: string;
  truckType: string;
  charges: number;
};

interface RateCardTableProps {
  data: RateCardRow[];
}

export function RateCardTable({ data }: RateCardTableProps) {
  return (
    <div className="w-[1110px] bg-[#ffffff] rounded-[25px] font-secondary overflow-hidden">
      <Table className="w-[1050px] mb-[22px]">
        <TableHeader>
          <TableRow className="border-b border-t border-[#E6EFF5] w-[1050px]">
            <TableHead className="text-center text-[#0B0704] font-primary text-[16px] py-[14.59px] border-r w-[350px]">
              Destination
            </TableHead>
            <TableHead className="text-center text-[#0B0704] font-primary text-[16px] py-[14.59px] border-r w-[350px]">
              Truck Type
            </TableHead>
            <TableHead className="text-center text-[#0B0704] font-primary text-[16px] py-[14.59px] w-[350px]">
              Charges in AED
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className="border-b border-t border-[#E6EFF5] "
            >
              <TableCell className="text-center py-[14.59px] border-r w-[350px] border-b">
                {row.destination}
              </TableCell>
              <TableCell className="text-center py-[14.59px] border-r w-[350px] border-b">
                {row.truckType}
              </TableCell>
              <TableCell className="text-center py-[14.59px] w-[350px] border-b">
                {row.charges.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
