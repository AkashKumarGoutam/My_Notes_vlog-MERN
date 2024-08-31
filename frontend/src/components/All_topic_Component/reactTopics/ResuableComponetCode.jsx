import React from "react";
import img from "../../assets/reuseable_component_pic1.png";
import imgg from "../../assets/reuseable_component_pic2.png";

import TheoryPart from "../../components/theoryPart/TheoryPart";

function ResuableComponetCode() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold underline">
        Reusable Component Code
      </h1>
      <div className="flex gap-6 justify-center pb-10">
        <div className="border-2 p-4 border-blue-80 flex flex-col justify-center items-center  shadow-xl">
          <img src={img} alt="img" className="w-40" />
          <h1 className="text-lg font-semibold">Akash</h1>
          <h1 className="text-lg font-semibold">Akash</h1>
          <h1 className="text-lg font-semibold">Akash</h1>
        </div>

        <div className="border-2 p-4 border-blue-80  flex flex-col justify-center items-center  shadow-xl">
          <img src={img} alt="img" className="w-40" />
          <h1 className="text-lg font-semibold">Akash</h1>
          <h1 className="text-lg font-semibold">Akash</h1>
          <h1 className="text-lg font-semibold">Akash</h1>
        </div>

        <div className="border-2 p-4 border-blue-80  flex flex-col justify-center items-center  shadow-xl">
          <img src={img} alt="img" className="w-40" />
          <h1 className="text-lg font-semibold">Akash</h1>
          <h1 className="text-lg font-semibold">Akash</h1>
          <h1 className="text-lg font-semibold">Akash</h1>
        </div>
      </div>

      <TheoryPart
        heading="Map() Method"
        paragraph={
          <ul>
            <li>
              <b>1.Modularity: </b>Components are modular, allowing for easy
              reuse across different parts of an application.
            </li>
            <li>
              <b>2.Consistency:</b> Reusing components ensures UI consistency
              and reduces the chance of discrepancies.
            </li>
            <li>
              <b>3.Efficiency:</b> Reduces development time and effort by
              avoiding duplication of code.
            </li>
            <li>
              <b>4.Maintainability:</b> Changes made to a reused component
              reflect everywhere it's used, simplifying updates and bug fixes.
            </li>
          </ul>
        }
        img={<img src={img} alt="img" />}
      />
    </div>
  );
}

export default ResuableComponetCode;
