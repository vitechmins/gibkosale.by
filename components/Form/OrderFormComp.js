"use client";
import { forwardRef } from "react";
import FormOrder2 from "./FormOrder2";

const OrderFormComp = forwardRef(({ data, setData, setIsActive }, ref) => {
	return (
		<div ref={ref} className="rounded-lg border border-gray-300 p-4 bg-white flex flex-col gap-3 mb-32">
			<FormOrder2 data={data} setData={setData} setIsActive={setIsActive} />
		</div>
	);
});

export default OrderFormComp;
