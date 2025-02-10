import React, { FC, useState, useEffect, useRef } from 'react';
import { useGlobalControls } from '../hooks/useGlobalControls';

const Mint: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { 
      title: "Forgotten Babies", 
      description: "Adopt a baby today!",
      image: "/img/community/babies.gif",
      link: "https://x.com/home" 
    },
    { 
      title: "BlackSand", 
      description: "Neigh! Neigh!",
      image: "/img/community/blacksand.png",
      link: "/collection" 
    },
    { 
      title: "Runes TCG", 
      description: "Trading Card Game",
      image: "/img/community/runes-tcg.png",
      link: "/trade" 
    },
    { 
      title: "Heroes of Cumberland", 
      description: "Beat your meat!",
      image: "/img/community/cumberland.png",
      link: "/settings" 
    },
    { 
      title: "Wizard Nouns", 
      description: "Beat your meat!",
      image: "/img/community/nouns.png",
      link: "/settings" 
    },
    { 
      title: "TBC: Komodo Roost", 
      description: "Beat your meat!",
      image: "/img/community/komodo.gif",
      link: "/settings" 
    },
    { 
      title: "TBC: Desert Bestiary", 
      description: "Beat your meat!",
      image: "/img/community/bestiary.gif",
      link: "/settings" 
    },
    { 
      title: "Forgotten Punks", 
      description: "Beat your meat!",
      image: "/img/community/punks.gif",
      link: "/settings" 
    },
    { 
      title: "Forgotten Smouls", 
      description: "Beat your meat!",
      image: "/img/community/smouls.png",
      link: "/settings" 
    }

  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && container.children[0]) {
      const selectedElement = container.children[0].children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
  }, [selectedIndex]);

  useGlobalControls({
    onUp: () => {
      setSelectedIndex(prev => Math.max(0, prev - 1));
    },
    onDown: () => {
      setSelectedIndex(prev => Math.min(menuItems.length - 1, prev + 1));
    },
    onAction: () => {
      window.location.href = menuItems[selectedIndex].link;
    }
  });

  return (
    <div className="h-full flex flex-col bg-[#697c01] items-center p-2 overflow-y-auto scrollbar-hide">
      <h1 className="text-[22px] font-['MekMono'] text-[#333d02] uppercase  border-[#333d02] w-full text-center">
        Community Collection
      </h1>
      <div 
        ref={scrollContainerRef}
        className="flex-1 w-full "
      >
        <div className="grid grid-cols-2 gap-2 p-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`
                group flex flex-col items-center cursor-pointer p-2
                transition-all duration-150 hover:border-yellow-400
                ${selectedIndex === index ? 'border-yellow-400 border-2 bg-yellow-300/20' : 'bg-yellow-300/10 border-yellow-300'}
              `}
              onClick={() => (window.location.href = item.link)}
            >
              <div className="w-20 h-20 mb-1 rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full text-center">
                <span className="block font-['MekMono'] text-[14px] text-[#333d02] uppercase leading-none tracking-tighter">
                  {item.title}
                </span>
                <span className="block font-['MekMono'] text-[14px] text-[#333d02] uppercase mt-1 leading-none tracking-tighter">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mint;
