import React from "react";
import Card from "../Card/Card";
import { useRef } from "react";

const Foreground = () => {
    const ref = useRef(null);

  const item = [
    {
      descript: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      fileSize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now.", tagColor: "green" },
    },
    {
      descript: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      fileSize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now.", tagColor: "blue" },
    },
    {
      descript: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      fileSize: ".9mbs",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "slate" },
    },
    {
      descript: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      fileSize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now.", tagColor: "slate" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex  gap-5 flex-wrap p-5">
      {item.map((ItemData, index) => (
        <Card data={ItemData} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
