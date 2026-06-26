"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: number;
  contentType: 1 | 2 | 3 | 4 | 5;
}

const cardData = {
  1: {
    title: "JobFinder",
    description: "Python web scraping + job automation",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=512&q=80",
    tag: "Python",
    link: "https://github.com/PritamPattnaik360/JobFinder",
  },
  2: {
    title: "CamReader",
    description: "Real-time multilingual text recognition",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=512&q=80",
    tag: "Computer Vision",
    link: "https://github.com/PritamPattnaik360/CamReader",
  },
  3: {
    title: "Kalman Filter",
    description: "Predictive modeling for sensor data",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=512&q=80",
    tag: "Python / ML",
    link: "https://github.com/PritamPattnaik360/KalmanFilter",
  },
  4: {
    title: "GPS App",
    description: "Android location tracker with dark mode",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=512&q=80",
    tag: "Java / Android",
    link: "https://github.com/PritamPattnaik360/GPSapp",
  },
  5: {
    title: "Tic-Tac-Toe",
    description: "Two-player Android game in Java",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=512&q=80",
    tag: "Java / Android",
    link: "https://github.com/PritamPattnaik360/Tic-Tac-Toe",
  },
};

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
];

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
];

const exitAnimation = { y: 340, scale: 1, zIndex: 10 };
const enterAnimation = { y: -16, scale: 0.9 };

type ContentType = 1 | 2 | 3 | 4 | 5;

function CardContent({ contentType }: { contentType: ContentType }) {
  const data = cardData[contentType];

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-1 outline-white/10">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full select-none object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span className="truncate font-semibold text-[#e8eaf0]">{data.title}</span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1c2030] border border-white/10 text-[#8892a4] shrink-0">
              {data.tag}
            </span>
          </div>
          <span className="text-[#8892a4] text-sm mt-0.5">{data.description}</span>
        </div>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 shrink-0 cursor-pointer items-center gap-0.5 rounded-full bg-[#63b3ed] pl-4 pr-3 text-sm font-medium text-[#0d0f14]"
        >
          View
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card;
  index: number;
  isAnimating: boolean;
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2];
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index;

  return (
    <motion.div
      key={card.id}
      initial={index === 2 ? enterAnimation : undefined}
      animate={{ y, scale }}
      exit={index === 0 ? exitAnimation : undefined}
      transition={{ type: "spring", duration: 1, bounce: 0 }}
      style={{ zIndex, left: "50%", x: "-50%", bottom: 0 }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-white/10 bg-[#151820] p-1 shadow-lg will-change-transform sm:w-[512px]"
    >
      <CardContent contentType={card.contentType as ContentType} />
    </motion.div>
  );
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(4);

  const handleAnimate = () => {
    setIsAnimating(true);
    const types: ContentType[] = [1, 2, 3, 4, 5];
    const currentType = cards[2].contentType as ContentType;
    const currentIdx = types.indexOf(currentType);
    const nextType = types[(currentIdx + 1) % types.length];
    setCards([...cards.slice(1), { id: nextId, contentType: nextType }]);
    setNextId((prev) => prev + 1);
    setIsAnimating(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>
      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-white/10 py-4">
        <button
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-white/10 bg-[#151820] px-4 text-sm font-medium text-[#e8eaf0] transition-all hover:bg-[#1c2030] active:scale-[0.98]"
        >
          Next Project ↓
        </button>
      </div>
    </div>
  );
}
