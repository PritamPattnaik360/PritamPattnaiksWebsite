"use client";

import { motion } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/neno-shader";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import { Typewriter } from "@/components/ui/typewriter";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { SectionHeader } from "@/components/ui/section-header";
import { DockNav } from "@/components/ui/dock-nav";

const skills = ["Java", "Python", "C++", "HTML/CSS", ".NET MAUI", "REST APIs", "SQL", "Android Studio"];

const experience = [
  {
    date: "Jul 2022 – Aug 2023",
    company: "01ByteSoft",
    role: "Internship → Contract",
    description:
      "Built websites, Android apps with Android Studio, cross-platform apps using .NET MAUI, REST APIs, and managed SQL databases.",
  },
  {
    date: "Feb 2020 – Mar 2023",
    company: "Code Ninjas",
    role: "Part-time · Sensei",
    description:
      "Taught students Lua, Python, and MicroPython through hands-on coding projects in a structured learning environment.",
  },
];

const navItems = [
  {
    label: "About",
    href: "#about",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/PritamPattnaik360",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const contactLinks = [
  { icon: "✉️", label: "Email", href: "mailto:pritampattnaik360@gmail.com" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/pritam-pattnaik-doinbetter2789" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/PritamPattnaik360" },
  { icon: "📸", label: "Instagram", href: "https://instagram.com/pritam.pritzy" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-[#e8eaf0]">
      {/* ── HERO ── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        {/* dark radial vignette so text always has contrast */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(13,15,20,0.72)_0%,rgba(13,15,20,0.15)_100%)]" />
        {/* gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0d0f14] to-transparent z-10" />

        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(99,179,237,0.35)] bg-[rgba(13,15,20,0.6)] backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-[#63b3ed] mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#63b3ed] shadow-[0_0_6px_#63b3ed] animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white mb-4 drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]"
          >
            Hi, I&apos;m{" "}
            <span className="text-[#63b3ed] drop-shadow-[0_0_28px_rgba(99,179,237,0.7)]">
              Pritam
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-lg mb-2 drop-shadow-[0_1px_12px_rgba(0,0,0,0.8)]"
          >
            Software developer focused on{" "}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-white mb-10 h-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.8)]"
          >
            <Typewriter words={["back-end systems", "cybersecurity", "machine learning", "Android apps", "REST APIs"]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-3 flex-wrap justify-center mb-10"
          >
            <a
              href="#contact"
              className="rounded-lg bg-[#63b3ed] px-5 py-2.5 text-sm font-semibold text-[#0d0f14] hover:bg-[#90cdf4] transition-colors hover:shadow-[0_0_20px_rgba(99,179,237,0.4)] active:scale-95"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/PritamPattnaik360"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-[#151820] px-5 py-2.5 text-sm font-semibold text-[#e8eaf0] hover:border-[rgba(99,179,237,0.4)] hover:bg-[#1c2030] transition-all active:scale-95"
            >
              GitHub ↗
            </a>
          </motion.div>

          {/* Dock nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <DockNav items={navItems} />
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#8892a4]"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ── CONTENT ── */}
      <div className="mx-auto max-w-3xl px-6 pb-24 space-y-24">

        {/* ── ABOUT ── */}
        <section id="about">
          <SectionHeader title="About" />
          <BentoGrid className="grid-cols-1 sm:grid-cols-2">
            <BentoCard className="sm:col-span-2" delay={0}>
              <p className="text-[#8892a4] leading-relaxed text-sm">
                I&apos;m a Computer Science major at <span className="text-[#63b3ed] font-medium">NJIT</span> with
                hands-on experience building web applications, Android apps, and back-end systems. Especially
                interested in back-end software development, cybersecurity, and neural networks / deep learning.
              </p>
              <p className="text-[#8892a4] leading-relaxed text-sm mt-3">
                Coursework includes Intro to CS, Fundamentals of CS, Calculus 1, and Physics 1.
              </p>
            </BentoCard>

            <BentoCard delay={0.1}>
              <div className="text-2xl mb-3">🎓</div>
              <div className="font-semibold text-[#e8eaf0] text-sm">NJIT</div>
              <div className="text-xs text-[#8892a4] mt-1">B.S. Computer Science</div>
            </BentoCard>

            <BentoCard delay={0.15}>
              <div className="text-2xl mb-3">📍</div>
              <div className="font-semibold text-[#e8eaf0] text-sm">New Jersey, USA</div>
              <div className="text-xs text-[#8892a4] mt-1">Open to remote & hybrid</div>
            </BentoCard>

            <BentoCard className="sm:col-span-2" delay={0.2}>
              <div className="text-xs font-semibold text-[#63b3ed] uppercase tracking-wider mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1 rounded-full bg-[#1c2030] border border-white/[0.07] text-[#8892a4]">
                    {s}
                  </span>
                ))}
              </div>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience">
          <SectionHeader title="Experience" />
          <Timeline items={experience} />
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <SectionHeader title="Projects" />
          <AnimatedCardStack />
        </section>

        {/* ── FUN ── */}
        <section id="friday">
          <SectionHeader title="Is it Friday yet?" />
          <FridayWidget />
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <SectionHeader title="Contact" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#151820] px-4 py-3 text-sm font-medium text-[#e8eaf0] hover:border-[rgba(99,179,237,0.3)] hover:bg-[#1c2030] transition-all"
              >
                <span>{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.07] py-6 text-center text-xs text-[#8892a4]">
        © 2024 Pritam Pattnaik
      </footer>
    </main>
  );
}

function FridayWidget() {
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const timeGreeting = hour < 10 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const countdowns = [
    "Tomorrow's Monday 🥱",
    "4 days until Friday 😤",
    "3 days until Friday 😪",
    "2 days until Friday 😐",
    "1 day until Friday 😆",
    "It's Friday!!! 🎉",
    "Weekend, let's go! 😍",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#151820] to-[#1c2030] p-10 text-center"
    >
      <p className="text-2xl font-bold text-[#e8eaf0] mb-3">{timeGreeting}!</p>
      <p className="text-[#8892a4]">
        {day === 5 ? (
          <span className="text-[#76e4b5] font-semibold">It&apos;s Friday!!! 🎉</span>
        ) : (
          countdowns[day]
        )}
      </p>
    </motion.div>
  );
}
