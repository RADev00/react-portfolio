import React, { useEffect, useState } from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, onClick }) => {
  // Initialize default imageHeight
  const [imageHeight, setImageHeight] = useState(450);

  useEffect(() => {
    // Define a function to update the image height
    function updateImageHeight() {
      const screenWidth = window.innerWidth;

      // Smalls screens <= 768, large screens >= 1024
      if (screenWidth <= 768) {
        setImageHeight(300);
      } else if (screenWidth >= 1024) {
        setImageHeight(450);
      } else {
        setImageHeight(600);
      }
    }

    // Initial call, and event listener for window resize
    updateImageHeight();
    window.addEventListener('resize', updateImageHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateImageHeight);
    };
  }, []);


  return (
    <div
      className="cursor-pointer shadow-lg border-2 border-slate-200 rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="work-card relative shadow-md border-2 border-slate-200 rounded-lg transition-all ease-out duration-300 h-48 mob:h-auto"
      >
        <div className="relative h-full w-full object-cover hover:shrink-0 transition-all ease-out duration-300"
          style={{ height: `${imageHeight}px` }}>
          <Image
            src={img}
            alt={name}
            layout="fill"
          />
        </div>
      </div>
      <h1 className="mt-5 text-lg laptop:text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-md laptop:text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
