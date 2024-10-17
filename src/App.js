import React, { useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageCanvas from "./components/ImageCanvas";

function App() {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className=" mx-auto p-4  bg-black bg-opacity-70">
      <div className="flex flex-col">
        <span className="text-2xl font-bold px-4 text-white">Name: Gaurav Gandhi</span>
        <span className="text-xl font-bold px-4 text-white">Email: gaurav1994.ge@gmail.com</span>
      </div>

      <h1 className="text-3xl font-bold p-4 text-white">Image Caption App</h1>
      {selectedImage ? (
        <ImageCanvas
          imageUrl={selectedImage}
          onReset={() => setSelectedImage("")}
        />
      ) : (
        <ImageSearch onSelect={setSelectedImage} />
      )}
    </div>
  );
}

export default App;
