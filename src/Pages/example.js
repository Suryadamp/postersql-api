import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";
const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const details = [
    { name: "surya", age: 21 },
    { name: "suryasj", age: 1 },
    { name: "sj", age: 2 },
  ];

  return (
    <>
      <div>example</div>
      <div>
        <ComponentToPrint ref={componentRef} details={details} />
        <button onClick={handlePrint}>Print this out!</button>
      </div>
    </>
  );
};

export default Example;
