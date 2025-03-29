import React from "react";
import { motion } from "motion/react";

function TrainerInfo() {
  return (
    <div className="bg-black text-white flex flex-col items-center w-full p-6 md:max-w-[98%] md:mt-5 md:mx-2 md:rounded-4xl">
      <motion.p 
        className="text-[35px] text-center mb-8 md:text-[50px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        مين كابتن محمود نصر؟
      </motion.p>

      <div className="flex flex-col md:flex-row md:space-x-8 md:items-start w-full">
        <div className="md:w-1/2">
          <motion.img
            src="profile.jpg"
            alt="Captain Mahmoud Nasr"
            className="w-[80%] h-[500px] object-cover rounded-3xl mb-6 md:mb-0 mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="flex flex-col space-y-4 md:w-1/2 text-right">
          <motion.p 
            className="text-right text-lg md:text-2xl font-light"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            أنا المهندس محمود نصر، حاصل على بكالوريوس الهندسة المعمارية، لكن
            شغفي الحقيقي كان دائمًا في عالم الفيتنس. دخلت هذا المجال لأنني
            أحب تغيير حياة الناس للأفضل، ومهما كان التحدي، استطعت أن أتميز
            وأصل إلى القمة في كل مجال خضته. كنت ضابط مهندس، والأول على دفعتي
            (153 ضباط)، وحصلت على نوط الواجب العسكري بتصديق من الرئيس عبد
            الفتاح السيسي، تقديرًا لأدائي بتفانٍ وإتقان. وكما اعتدت أن أكون
            رقم 1، هدفي في الفيتنس هو أن أقدم لك أقوى خدمة تدريب باحترافية
            عالية. حاصل على جميع الشهادات المعتمدة من جولدز أكاديمي، وبعد مرحلة
            الجيش، قررت الاستمرار في مجال الفيتنس لإكمال رسالتي الحقيقية: أن
            أكون سببًا في تغيير حياتك للأفضل.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default TrainerInfo;

