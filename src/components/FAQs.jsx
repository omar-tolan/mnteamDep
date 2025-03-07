// import React from "react";
// import { motion } from "motion/react";
// import { useState } from "react";

// const faqs = [
//   {
//     q: "Question 1?",
//     a: "Answer",
//   },
//   {
//     q: "Question 1?",
//     a: "Answer",
//   },
//   {
//     q: "Question 1?",
//     a: "Answer",
//   },
//   {
//     q: "Question 1?",
//     a: "Answer",
//   },
// ];

// const FAQs = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const showAnswer = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <div className="flex flex-col items-center bg-black text-white mt-4 py-4 px-10 w-screen h-screen">
//       <p className="text-3xl mb-6">Frequently Asked Questions</p>
//       <button
//         className="rounded-2xl border-2 flex flex-col w-full px-4 cursor-pointer"
//         onClick={showAnswer(1)}
//       >
//         <div className="flex flex-row space-x-1">
//           {openIndex === 1 ? <p>-</p>:<p>+</p>}
//           <p>Question: How can i start my journey?</p>
//         </div>
//         <div>
//           <p className="font-light text-sm">
//             This is an answer to the asked question
//           </p>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default FAQs;
