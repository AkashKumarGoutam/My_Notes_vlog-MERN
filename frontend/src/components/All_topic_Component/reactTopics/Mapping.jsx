import React from "react";
import mapImg from "../../../assets/map-code-pic.png";
import TheoryPart from "../../theoryPart/TheoryPart";

function Mapping() {
  const foodItem = ["banana", "apple", "dates"];
  // const foodItem=[]
  return (
    <div className="p-10">
      <h1 className="flex justify-center text-xl font-semibold p-4 underline">
        This is simple Food List App
      </h1>
      {foodItem.length===0 && <h1>No Any items</h1>}
      <div className="flex flex-col justify-center item-center px-40">
        {foodItem.map((element) => (
          <li className="border-2">{element}</li>
        ))}
      </div>

      <TheoryPart
        heading="Map() Method"
        paragraph="JavaScript array map() method is used to iterate through the data in the form of an array.
         This map() in React is used to create the list by iterating the data and transforming it into the list components using HTML tags."
        img={<img src={mapImg} alt="Map illustration" />}
      />
    </div>
  );
}

export default Mapping;
