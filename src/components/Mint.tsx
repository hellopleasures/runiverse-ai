import React, { FC, useState } from 'react';
import { useGlobalControls } from '../hooks/useGlobalControls';

const Mint: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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
    <div className="h-full flex flex-col bg-[#697c01] flex items-center justify-center">
      <h1 className="text-2xl font-bold text-[#333d02] uppercase p-2">Community Collection</h1>
      <div className="grid grid-cols-2 gap-4 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col w-full h-full transition-colors flex items-center cursor-pointer p-4 gap-2 
              ${selectedIndex === index ? 'border-4 border-yellow-400 bg- yellow-300/20' : '  bg-yellow-300/20'}
            `}
            onClick={() => window.location.href = item.link}
          >
            <div className="w-24 h-24">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[#333d02] text-center font-['MekMono'] text-xl tracking-tighter uppercase leading-none font-medium">{item.title}</span>
              <span className="text-[#333d02] text-center  text-sm truncate  text-lg tracking-tighter uppercase font-['MekMono']">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mint;
