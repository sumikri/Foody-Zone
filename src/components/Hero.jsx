import React from "react";

const Hero = () => {
  const foodItems = [
    {
      name: "Boiled Eggs",
      description: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "$10.00",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Ramen",
      description: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "$25.00",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Grilled Chicken",
      description: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "$45.00",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Cake",
      description: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "$18.00",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Burger",
      description: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "$23.00",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Pancake",
      description: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "$25.00",
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center pt-[239px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-[190px] pr-[190px] opacity-80 ">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg `  items-center p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-[133px] h-[133px] object-cover mb-4 "
            />
            <div className="   ">
            <h2 className="text-white text-lg font-bold ">{item.name}</h2>
            <p className="text-gray-400 text-sm text-center my-2   ">
              {item.description}
            </p>
            <div className="mt-4">
              <span className="bg-red-500 text-white px-4 py-2 rounded-md  ">
                {item.price}
              </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
