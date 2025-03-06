import React from 'react';

function Trainer() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-full w-full p-6 md:max-w-[98%] md:rounded-4xl md:mt-5 md:mx-2">
      <p className="text-[35px] text-center mb-4 md:text-[50px] md:mb-10">اتعرف على مدربك الجديد</p>
      <div className="w-full relative" style={{ paddingBottom: "56.25%", height: 0 }}>
        <iframe 
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        src="https://www.youtube.com/embed/xc4OtzAnVMI"
        title="How To Train Like A Minimalist (More Gains In Less Time)" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen />
      </div>
    </div>
  );
}

export default Trainer;
