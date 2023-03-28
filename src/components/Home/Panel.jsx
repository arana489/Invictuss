import React from "react";
import PanelBox from "./PanelBox";

export default function HomeValues(props) {
  const values = [
    {
      imageSrc: "src/assets/shlomah.png",
     
    }, 
    {
      imageSrc: "src/assets/sixt.jpg",
      
    },

    {
      imageSrc: "src/assets/רפאל.png",
        
    },

    {
       imageSrc: "src/assets/קרן מנדל.png",
          
    },

    {
        imageSrc: "src/assets/כהן פיתוח גז ונפט.png",
           
     },

     {
        imageSrc: "src/assets/דני שפירא.png",
           
     },

     {
        imageSrc: "src/assets/בזק עסקים.png",
           
     },
   
  ];

  return (
    <div className="space-x-8 pt-24">
      
      <div className="lg:flex justify-center">
        {values.map((value) => (
                
                <div className="w-72 mb-14 bg-white p-6 flex flex-col items-center m-auto" style={{ width: "100%", maxWidth: "301px" }}>
            <PanelBox
            
              imageSrc={value.imageSrc}
    
            />
            </div>
         
        
        ))}
      </div>
    </div>
  );
}