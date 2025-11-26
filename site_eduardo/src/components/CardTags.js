import React from 'react';

export default function CardTags() {
  const tags = [
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "Indesign", "HTML", "CSS", "MySQL", "JavaScript", "React", "WordPress", "Git", "GitHub", 
  ];

  return (
    <div className="w-full h-72 m-8 mr-0 bg-[#AABF91] p-4 flex flex-col rounded-xl shadow-[-20px_20px_0px_-5px_#31572c] text-[#31572c]">
      <span className="font-black text-xl mb-4">Hard skills</span>
      <div className="overflow-auto h-full custom-scrollbar">
        <ul className="flex flex-wrap">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="relative inline-block text-white text-sm bg-[#31572c] px-6 py-2 rounded-full m-2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-[#51572c]
                before:content-[''] before:inline-block before:absolute before:top-1/2 before:-translate-y-1/2 before:left-2 before:w-2 before:h-2 before:rounded-full before:bg-[#90a955]
                after:content-[''] after:inline-block after:absolute after:top-1/2 after:-translate-y-1/2 after:right-2 after:w-2 after:h-2 after:rounded-full after:bg-[#90a955]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
