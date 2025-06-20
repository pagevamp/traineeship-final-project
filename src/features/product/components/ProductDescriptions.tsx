import React from 'react'
import { productDetails } from '../constant';

const ProductDescriptions = () => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <span className="font-primary text-[16px] font-normal">A1-23412</span>
        <span className="font-primary text-[16px] font-light">Qty: 1</span>
      </div>
      <hr className="flex-grow h-[50px] w-[0px] border-r border-gray-300" />
      <div className="w-full sm:max-w-[823px] grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-4">
        {productDetails.map((detail, index) => (
          <div key={index} className="grid grid-cols-3 items-center gap-2">
            <p>
              <span className="font-primary text-[16px] font-normal">
                {detail.label}{" "}
              </span>
              <span className="font-primary text-[16px] font-light">
                {detail.value}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescriptions