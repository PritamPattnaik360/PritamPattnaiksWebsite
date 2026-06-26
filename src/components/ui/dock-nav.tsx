"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface DockItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

function DockIcon({ item, mouseX }: { item: DockItem; mouseX: ReturnType<typeof useMotionValue<number>> }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-80, 0, 80], [36, 52, 36]);
  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      style={{ width }}
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-[#1c2030] border border-white/[0.07] text-[#8892a4] hover:text-[#63b3ed] hover:border-[rgba(99,179,237,0.3)] transition-colors"
    >
      <motion.div style={{ width }} className="flex items-center justify-center">
        {item.icon}
      </motion.div>
      {/* tooltip */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-[#1c2030] border border-white/10 px-2 py-0.5 text-xs text-[#e8eaf0] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
        {item.label}
      </div>
    </motion.a>
  );
}

export function DockNav({ items }: { items: DockItem[] }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-end gap-2 rounded-2xl border border-white/[0.07] bg-[#0d0f14]/80 backdrop-blur-xl px-3 py-2 shadow-xl"
    >
      {items.map((item) => (
        <DockIcon key={item.label} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}
