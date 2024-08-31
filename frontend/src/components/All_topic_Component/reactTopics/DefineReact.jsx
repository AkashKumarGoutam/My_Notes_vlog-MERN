import React from "react";
import TheoryPart from "../../theoryPart/TheoryPart";

function DefineReact() {
  return (
    <div>
     <TheoryPart
     heading='Define ReactJs'
     paragraph={ <ol className="list-decimal p-4 pl-10">
      <li>React is a JavaScript library for building user interfaces.</li>
      <li>React is used to build single-page applications.</li>
      <li>React allows us to create reusable UI components.</li>
      <ol className="list-decimal">
        <h1 className="text-lg font-semibold underline pt-6 pb-2">The major features of React are:</h1>
        <li>Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.</li>
        <li>It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.</li>
        <li>Supports server-side rendering which is useful for Search Engine Optimizations(SEO).</li>
        <li>Follows Unidirectional or one-way data flow or data binding.</li>
        <li>Uses reusable/composable UI components to develop the view.</li>
      </ol>
    </ol>}
    img={<img src="https://static.javatpoint.com/tutorial/reactjs/images/reactjs-features.png" alt="img"/>}/>
    </div>
  );
}

export default DefineReact;
