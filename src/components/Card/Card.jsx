import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      className="relative shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[3rem] text-white flex flex-col  p-5 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm font-semibold leading-tight mt-5">
        {data.descript}
      </p>
      <footer className="absolute bottom-0 w-full h-16 left-0  mb-5">
        <div className="flex  items-center justify-between px-8  py-3">
          <h4 className="font-bold">{data.fileSize}</h4>
          <span className="w-7 h-7 bg-slate-700 rounded-full flex items-center p-1 justify-center">
            {data.close ? <IoClose /> : <MdDownload size="3rem" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full h-10 py-4 flex items-center justify-center ${
              data.tag.tagColor === "blue" ? "bg-blue-700" : "bg-green-700"
            }`}
          >
            <h3 className="text-sm font-semibold">{data.tag?.tagTitle}</h3>
          </div>
        )}
      </footer>
    </motion.div>
  );
};

export default Card;
