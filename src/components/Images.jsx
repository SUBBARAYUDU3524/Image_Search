import { useContext, useEffect } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Spinner from "./spinner"; // Corrected to use PascalCase for Spinner component

const Images = () => {
  const { response, isLoading, searchImage, setSearchImage } = useContext(ImageContext);

  // Set the default search term to "Cats" if not defined
  useEffect(() => {
    if (!searchImage) {
      const savedSearchImage = localStorage.getItem('searchImage') || 'Cats';
      setSearchImage(savedSearchImage);
    }
  }, [searchImage, setSearchImage]);

  return (
    <>
      <h1 className="text-center mt-6 underline text-2xl">
        {isLoading ? 'Loading...' : response.length === 0 ? 'No such items found' : `Results for ${searchImage || 'Cats'}`}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Spinner /> 
        ) : response.length === 0 ? (
          <p className="text-center text-xl mt-5"></p>
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
}

export default Images;
