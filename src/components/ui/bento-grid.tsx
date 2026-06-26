"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function BentoCard({ className, children, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "rounded-2xl border border-white/[0.07] bg-[#151820] p-6 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[rgba(99,179,237,0.3)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("grid auto-rows-min gap-4", className)}>
      {children}
    </div>
  );
}
