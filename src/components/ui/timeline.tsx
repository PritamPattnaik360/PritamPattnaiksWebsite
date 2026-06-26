"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  company: string;
  role: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8">
      {/* vertical line */}
      <div className="absolute left-2.5 top-0 h-full w-px bg-gradient-to-b from-[#63b3ed]/50 via-white/10 to-transparent" />

      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="relative"
          >
            {/* dot */}
            <div className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-[#63b3ed] bg-[#0d0f14] shadow-[0_0_8px_rgba(99,179,237,0.6)]" />

            <div className="rounded-xl border border-white/[0.07] bg-[#151820] p-5 hover:border-[rgba(99,179,237,0.3)] transition-colors">
              <div className="text-xs font-medium text-[#63b3ed] mb-1">{item.date}</div>
              <div className="font-semibold text-[#e8eaf0] text-base">{item.company}</div>
              <div className="text-xs text-[#8892a4] border border-white/[0.07] bg-[#1c2030] rounded px-2 py-0.5 inline-block mt-1 mb-3">{item.role}</div>
              <p className="text-sm text-[#8892a4] leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
