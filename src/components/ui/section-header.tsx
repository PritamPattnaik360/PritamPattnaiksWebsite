"use client";

import { motion } from "framer-motion";

export function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 mb-8"
    >
      <h2 className="text-sm font-semibold tracking-widest uppercase text-[#63b3ed]">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[rgba(99,179,237,0.3)] to-transparent" />
    </motion.div>
  );
}
