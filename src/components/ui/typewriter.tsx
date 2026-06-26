"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
}

export function Typewriter({ words, className }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse text-[#63b3ed]">|</span>
    </span>
  );
}
