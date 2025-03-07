import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    q: "هل يمكنني تحقيق نتائج قوية من خلال التدريب الأونلاين فقط؟",
    a: "طبعًا! مع خطة تدريبية مناسبة ومتابعة مستمرة، هتوصل لنتائج ممتازة حتى من البيت. الأهم هو الالتزام، وأنا هكون معاك خطوة بخطوة.",
  },
  {
    q: "كيف سأتمكن من متابعة تقدمي خلال البرنامج؟",
    a: "هيكون عندك متابعة دورية معايا، وتقارير عن تقدمك في التمارين والوزن. هنعدل الخطة حسب التحديات اللي تواجهها عشان نوصل للهدف.",
  },
  {
    q: "كل مرة بحاول أوصل لهدفي، مش بعرف أكمل.. إيه الحل؟?",
    a: "المشكلة مش فيك، لكن في النظام اللي جربته. هنساعدك تلاقي طريقة تناسبك وتخليك تلتزم بسهولة، وأنا هدعمك طول الطريق.",
  },
  {
    q: "هل فقدان الوزن يعني حرمان من الأكل؟",
    a: "أبدًا! الفكرة في اختيار الأكل الصح بالكميات المناسبة. هتأكل بطريقة تشبعك وتمدك بالطاقة، وفي نفس الوقت تخسر الوزن بشكل صحي.",
  },
  {
    q: "ما هي أول خطوة لبدء رحلتي مع التدريب؟",
    a: "أول خطوة انك تشنرك معايا, وهحددلك برنامج شخصى يناسب هدفك. بعدها هنبدأ التنفيذ والمتابعة معا",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const showAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col items-center bg-black text-white pt-4 pb-6 px-10 w-screen h-full">
      <p className="text-3xl mb-6">الأسئلة الشائعة</p>
      <div className="flex flex-col w-full space-y-4">
        {faqs.map((faq, index) => (
          <button
            key={index}
            className="rounded-2xl border-2 flex flex-col w-full px-4 py-2 cursor-pointer"
            onClick={() => showAnswer(index)}
          >
            <div className="flex flex-row w-full items-center justify-between pb-2 border-b-1 mb-2">
              <div className="flex justify-center items-center w-[30px] h-[30px] border-1 rounded-sm">
                {openIndex === index ? <p>-</p> : <p>+</p>}
              </div>
              <p className="text-right">{faq.q}</p>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden flex w-full justify-end"
            >
              <p className="font-light text-sm text-right">{faq.a} </p>
            </motion.div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
