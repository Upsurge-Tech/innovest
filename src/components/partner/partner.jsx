// // export default Partners;
// import React, { useState, useEffect } from "react";
// // import "./App.css"; // Import your Tailwind CSS file

// const Partners = () => {
//   const [cards, setCards] = useState([
//     { title: "Card 1", description: "Description for Card 1" },
//     { title: "Card 2", description: "Description for Card 2" },
//     { title: "Card 3", description: "Description for Card 3" },
//     { title: "Card 4", description: "Description for Card 1" },
//     { title: "Card 5", description: "Description for Card 2" },
//     { title: "Card 6", description: "Description for Card 3" },
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 3000); // Adjust the interval as needed

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="bg-gray-200 h-screen flex items-center justify-center mx-28">
//       <div className="relative overflow-hidden w-full">
//         <div className="flex transition-transform duration-1000 ease-in-out">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`w-1/2 transform ${
//                 index === currentIndex ? "translate-x-0" : "translate-x-full"
//               }`}
//             >
//               <div className="card bg-white p-4 rounded-md shadow-md">
//                 <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
//                 <p className="text-gray-600">{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`h-4 w-4 rounded-full ${
//                 index === currentIndex ? "bg-blue-500" : "bg-gray-300"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;

// import React, { useState, useEffect } from "react";

// const Partners = () => {
//   const [cards, setCards] = useState([
//     { title: "Card 1", description: "Description for Card 1" },
//     { title: "Card 2", description: "Description for Card 2" },
//     { title: "Card 3", description: "Description for Card 3" },
//     { title: "Card 4", description: "Description for Card 4" },
//     { title: "Card 5", description: "Description for Card 5" },
//     { title: "Card 6", description: "Description for Card 6" },
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 3000); // Adjust the interval as needed

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="bg-gray-200 h-screen flex items-center justify-center">
//       <div className="relative overflow-hidden w-full">
//         <div
//           className="flex items-center space-x-4 transition-transform duration-1000 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {cards.map((card, index) => (
//             <div key={index} className="w-full">
//               <div className="card bg-white p-4 rounded-md shadow-md">
//                 <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
//                 <p className="text-gray-600">{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;
import React, { useState, useEffect } from "react";
// import "./Slider.css"; // Impo/rt your Tailwind CSS file

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    // Add more data as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 1000); // Adjust the interval according to your needs

    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  return (
    <div className="slider-container relative overflow-hidden mx-68">
      <div
        className="slider flex transition-transform duration-300 ease-in"
        // style={{ animation: "slide 5s infinite" }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="card w-1/3 p-4"
            style={{ animation: "slide 5s infinite" }}
          >
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
